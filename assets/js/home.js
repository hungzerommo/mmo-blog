(function () {
    const utils = window.SiteUtils;
    if (!utils) return;

    if (utils.setActiveNav) utils.setActiveNav("home");

    const postsContainer = document.getElementById("latestPosts");
    if (!postsContainer) return;

    const loadMoreBtn = document.getElementById("homeLoadMore");
    const loadMoreWrapper = document.getElementById("homeLoadMoreWrapper");
    const featuredContainer = document.getElementById("featuredPosts");

    const heroSlider = document.getElementById("heroSlider");
    const heroPrev = document.getElementById("heroPrev");
    const heroNext = document.getElementById("heroNext");
    const heroDots = document.getElementById("heroDots");
    const heroLink = document.getElementById("heroLink");
    const heroTitle = document.getElementById("heroTitle");
    const heroEyebrow = document.getElementById("heroEyebrow");
    const heroSummary = document.getElementById("heroSummary");
    const heroImage = document.getElementById("heroImage");

    const sortedPosts = [...utils.posts].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
    );

    const heroSlides = sortedPosts.slice(0, Math.min(sortedPosts.length, 5));
    let heroIndex = 0;
    let heroTimer = null;
    const HERO_INTERVAL = 7000;

    const state = {
        filtered: [...sortedPosts],
        renderedCount: 0,
        pageSize: 9
    };

    const dispatchSearchResults = (count, keyword = "") => {
        window.dispatchEvent(
            new CustomEvent("search:results", {
                detail: {
                    context: "home",
                    count,
                    keyword
                }
            })
        );
    };

    const renderHeroSlide = (index) => {
        if (!heroSlides.length) return;
        const slide = heroSlides[index];

        if (heroLink) heroLink.href = `article.html?id=${encodeURIComponent(slide.id)}`;
        if (heroTitle) heroTitle.textContent = slide.title;
        if (heroEyebrow) {
            const mainLabel =
                utils.getGroupTitle(slide.category) || utils.getCategoryTitle(slide.category);
            heroEyebrow.textContent = mainLabel;
        }
        if (heroSummary) heroSummary.textContent = slide.excerpt;
        if (heroImage) {
            heroImage.src = slide.thumbnail;
            heroImage.alt = slide.title;
        }

        if (heroDots) {
            heroDots.querySelectorAll(".hero-dot").forEach((dot, dotIndex) => {
                dot.classList.toggle("is-active", dotIndex === index);
                dot.setAttribute("aria-selected", dotIndex === index ? "true" : "false");
                dot.tabIndex = dotIndex === index ? 0 : -1;
            });
        }
    };

    const stopHeroTimer = () => {
        if (heroTimer) {
            clearInterval(heroTimer);
            heroTimer = null;
        }
    };

    const startHeroTimer = () => {
        stopHeroTimer();
        if (heroSlides.length <= 1) return;
        heroTimer = setInterval(() => {
            heroIndex = (heroIndex + 1) % heroSlides.length;
            renderHeroSlide(heroIndex);
        }, HERO_INTERVAL);
    };

    const goToHero = (index) => {
        heroIndex = (index + heroSlides.length) % heroSlides.length;
        renderHeroSlide(heroIndex);
        startHeroTimer();
    };

    const initHeroSlider = () => {
        if (!heroSlider || !heroSlides.length) return;

        if (heroDots) {
            heroDots.innerHTML = "";
            if (heroSlides.length > 1) {
                heroSlides.forEach((slide, slideIndex) => {
                    const dot = document.createElement("button");
                    dot.type = "button";
                    dot.className = "hero-dot";
                    dot.setAttribute("aria-label", `Xem b\u00e0i n\u1ed5i b\u1eadt ${slideIndex + 1}`);
                    dot.setAttribute("aria-selected", slideIndex === 0 ? "true" : "false");
                    dot.setAttribute("role", "tab");
                    dot.tabIndex = slideIndex === 0 ? 0 : -1;
                    dot.addEventListener("click", () => goToHero(slideIndex));
                    heroDots.appendChild(dot);
                });
            }
            heroDots.style.display = heroSlides.length > 1 ? "flex" : "none";
        }

        if (heroPrev) {
            heroPrev.hidden = heroSlides.length <= 1;
            heroPrev.addEventListener("click", () => goToHero(heroIndex - 1));
        }

        if (heroNext) {
            heroNext.hidden = heroSlides.length <= 1;
            heroNext.addEventListener("click", () => goToHero(heroIndex + 1));
        }

        heroSlider.addEventListener("pointerenter", stopHeroTimer);
        heroSlider.addEventListener("pointerleave", startHeroTimer);

        renderHeroSlide(heroIndex);
        startHeroTimer();
    };

    const showEmptyMessage = (message) => {
        postsContainer.innerHTML = "";
        const empty = document.createElement("p");
        empty.className = "empty-state";
        empty.textContent = message;
        postsContainer.appendChild(empty);
        if (loadMoreWrapper) loadMoreWrapper.hidden = true;
        if (loadMoreBtn) loadMoreBtn.disabled = true;
    };

    const updateLoadMoreVisibility = () => {
        if (!loadMoreWrapper || !loadMoreBtn) return;
        const hasMore = state.renderedCount < state.filtered.length;
        loadMoreWrapper.hidden = !hasMore;
        loadMoreBtn.disabled = !hasMore;
    };

    const appendNextChunk = () => {
        if (state.renderedCount >= state.filtered.length) {
            updateLoadMoreVisibility();
            return;
        }
        const slice = state.filtered.slice(
            state.renderedCount,
            state.renderedCount + state.pageSize
        );
        slice.forEach((post) => postsContainer.appendChild(utils.renderPostCard(post)));
        state.renderedCount += slice.length;
        updateLoadMoreVisibility();
    };

    const resetFeed = (collection, emptyMessage) => {
        state.filtered = collection;
        state.renderedCount = 0;
        postsContainer.innerHTML = "";

        if (!collection.length) {
            showEmptyMessage(emptyMessage);
            dispatchSearchResults(0);
            return;
        }

        appendNextChunk();
        dispatchSearchResults(collection.length);
    };

    initHeroSlider();
    resetFeed(sortedPosts, "Hi\u1EC7n ch\u01B0a c\u00F3 b\u00E0i vi\u1EBFt \u0111\u1EC3 hi\u1EC3n th\u1ECB.");

    if (loadMoreBtn) loadMoreBtn.addEventListener("click", appendNextChunk);
    updateLoadMoreVisibility();

    if (featuredContainer) {
        const startIndex = heroSlides.length;
        const featuredPosts = sortedPosts.slice(startIndex, startIndex + 3);
        if (!featuredPosts.length) {
            const section = featuredContainer.closest(".section");
            if (section) section.hidden = true;
        } else {
            featuredPosts.forEach((post) => {
                const card = utils.renderPostCard(post);
                card.classList.add("post-card--featured");
                featuredContainer.appendChild(card);
            });
        }
    }

    window.addEventListener("search:submit", (event) => {
        const keyword = (event.detail || "").trim();
        if (keyword) {
            window.location.href = `search.html?q=${encodeURIComponent(keyword)}`;
        }
    });
})();




