(function () {
    const utils = window.SiteUtils;
    if (!utils) return;

    const titleEl = document.getElementById("categoryTitle");
    const descriptionEl = document.getElementById("categoryDescription");
    const postsContainer = document.getElementById("categoryPosts");
    const emptyState = document.getElementById("emptyState");
    const loadMoreBtn = document.getElementById("categoryLoadMore");
    const loadMoreWrapper = document.getElementById("categoryLoadMoreWrapper");
    const breadcrumbCurrent = document.getElementById("breadcrumbCurrent");
    const breadcrumbLink = document.getElementById("breadcrumbCategoryLink");
    const breadcrumbGroupItem = document.getElementById("breadcrumbGroupItem");
    const breadcrumbGroupLink = document.getElementById("breadcrumbGroupLink");
    const subnav = document.getElementById("categorySubnav");

    if (!postsContainer) return;

    const rawCategoryParam = utils.getQueryParam("category");
    const rawGroupParam = utils.getQueryParam("group");

    const resolveCategoryId = () => {
        if (!rawCategoryParam) return null;
        const decoded = decodeURIComponent(rawCategoryParam);
        const match = Object.keys(utils.categories).find(
            (key) => key.toLowerCase() === decoded.toLowerCase()
        );
        if (match) return match;
        if (decoded.toLowerCase() === "all") return "All";
        return decoded;
    };

    const activeCategoryId = resolveCategoryId();
    const categoryMeta =
        activeCategoryId && utils.categories[activeCategoryId]
            ? utils.categories[activeCategoryId]
            : activeCategoryId === "All"
            ? utils.categories.All
            : null;

    const fallbackGroupFromCategory =
        categoryMeta && categoryMeta.group ? categoryMeta.group : null;

    const resolveGroupId = () => {
        if (rawGroupParam) {
            const decoded = decodeURIComponent(rawGroupParam);
            if (utils.getGroupById && utils.getGroupById(decoded)) {
                return decoded;
            }
        }
        return fallbackGroupFromCategory;
    };

    const activeGroupId = resolveGroupId();
    const groupMeta =
        activeGroupId && utils.getGroupById ? utils.getGroupById(activeGroupId) : null;

    if (utils.setActiveNav) {
        const navKey =
            activeCategoryId && activeCategoryId !== "All" && utils.categories && utils.categories[activeCategoryId]
                ? activeCategoryId
                : groupMeta
                ? groupMeta.id
                : "none";

        utils.setActiveNav(navKey);
    }

    const baseCollection = (() => {
        if (activeCategoryId && activeCategoryId !== "All" && utils.categories[activeCategoryId]) {
            return utils.filterPostsByCategoryId(activeCategoryId, utils.posts);
        }
        if (groupMeta) {
            return utils.filterPostsByGroup(groupMeta.id, utils.posts);
        }
        return [...utils.posts];
    })();

    const sortedPosts = baseCollection.sort((a, b) => new Date(b.date) - new Date(a.date));

    const state = {
        filtered: [...sortedPosts],
        renderedCount: 0,
        pageSize: 9,
        lastKeyword: ""
    };

    const getCategoryLabel = (categoryId) => {
        if (!categoryId) return "";
        const group = groupMeta || utils.getGroupById(utils.getGroupForCategory(categoryId));
        if (group) {
            const match = group.categories.find((item) => item.id === categoryId);
            if (match && match.title) return match.title;
        }
        return categoryId;
    };

    const dispatchSearchResults = (count) => {
        window.dispatchEvent(
            new CustomEvent("search:results", {
                detail: {
                    context: "category",
                    count,
                    keyword: state.lastKeyword,
                    category: activeCategoryId || null,
                    group: groupMeta ? groupMeta.id : null
                }
            })
        );
    };

    const showEmptyState = (message) => {
        if (emptyState) {
            emptyState.textContent = message;
            emptyState.hidden = false;
        }
        postsContainer.innerHTML = "";
        if (loadMoreWrapper) loadMoreWrapper.hidden = true;
    };

    const hideEmptyState = () => {
        if (emptyState) emptyState.hidden = true;
    };

    const categoryFallbackDescription =
        (utils.categories.All && utils.categories.All.description) ||
        "Khám phá các bài viết MMO mới nhất.";

    const updateHeader = () => {
        const allTitle = (utils.getCategoryTitle && utils.getCategoryTitle("All")) || "Tất cả bài viết";
        let titleText = allTitle;
        let descriptionText = categoryFallbackDescription;

        if (groupMeta && (!activeCategoryId || activeCategoryId === "All" || !utils.categories[activeCategoryId])) {
            titleText = groupMeta.title;
            descriptionText = groupMeta.description;
        }

        if (categoryMeta && activeCategoryId && activeCategoryId !== "All") {
            titleText = getCategoryLabel(activeCategoryId);
            descriptionText = categoryMeta.description || descriptionText;
        } else if (activeCategoryId === "All" && utils.categories.All) {
            titleText = allTitle;
            descriptionText = utils.categories.All.description;
        }

        if (titleEl) titleEl.textContent = titleText;
        if (descriptionEl) descriptionEl.textContent = descriptionText;

        document.title = `${titleText} | MMO Insight`;

        if (breadcrumbLink) {
            breadcrumbLink.textContent = "Danh mục";
            breadcrumbLink.href = "category.html?category=All";
        }

        if (breadcrumbGroupItem) {
            const shouldShowGroupCrumb =
                !!(groupMeta && activeCategoryId && activeCategoryId !== "All");
            breadcrumbGroupItem.hidden = !shouldShowGroupCrumb;
            if (shouldShowGroupCrumb && breadcrumbGroupLink) {
                breadcrumbGroupLink.textContent = groupMeta.title;
                breadcrumbGroupLink.href = `category.html?group=${encodeURIComponent(groupMeta.id)}`;
            }
        }

        if (breadcrumbCurrent) {
            if (categoryMeta && activeCategoryId && activeCategoryId !== "All") {
                breadcrumbCurrent.textContent = getCategoryLabel(activeCategoryId);
            } else if (groupMeta) {
                breadcrumbCurrent.textContent = groupMeta.title;
            } else {
                breadcrumbCurrent.textContent = allTitle;
            }
        }
    };

    const renderSubnav = () => {
        if (!subnav) return;
        if (!groupMeta || !groupMeta.categories || !groupMeta.categories.length) {
            subnav.hidden = true;
            subnav.innerHTML = "";
            return;
        }

        subnav.hidden = false;
        subnav.innerHTML = "";

        const makeChip = (label, href, isActive = false) => {
            const chip = document.createElement("a");
            chip.className = `quick-category-chip${isActive ? " is-active" : ""}`;
            chip.href = href;
            chip.textContent = label;
            if (isActive) chip.setAttribute("aria-current", "page");
            return chip;
        };

        const isGroupOverview = !activeCategoryId || activeCategoryId === "All" || !utils.categories[activeCategoryId];
        subnav.appendChild(
            makeChip(
                "Tất cả trong nhóm",
                `category.html?group=${encodeURIComponent(groupMeta.id)}`,
                isGroupOverview
            )
        );

        groupMeta.categories.forEach((category) => {
            const href = `category.html?group=${encodeURIComponent(groupMeta.id)}&category=${encodeURIComponent(category.id)}`;
            const isActive = activeCategoryId === category.id;
            subnav.appendChild(makeChip(category.title || category.id, href, isActive));
        });
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
        const nextItems = state.filtered.slice(
            state.renderedCount,
            state.renderedCount + state.pageSize
        );
        nextItems.forEach((post) => postsContainer.appendChild(utils.renderPostCard(post)));
        state.renderedCount += nextItems.length;
        updateLoadMoreVisibility();
    };

    const resetFeed = (collection, emptyMessage) => {
        state.filtered = collection;
        state.renderedCount = 0;
        postsContainer.innerHTML = "";

        if (!collection.length) {
            showEmptyState(emptyMessage);
            dispatchSearchResults(0);
            return;
        }

        hideEmptyState();
        appendNextChunk();
        dispatchSearchResults(collection.length);
    };

    const handleSearch = (keyword) => {
        const term = (keyword || "").trim();
        state.lastKeyword = term;
        const filteredPosts = utils.filterPosts(term, sortedPosts);
        const baseMessage = groupMeta
            ? "Chưa có bài viết cho nhóm này. Vui lòng quay lại sau!"
            : "Chưa có bài viết nào. Vui lòng quay lại sau!";
        const message = term
            ? "Không tìm thấy bài viết phù hợp với từ khóa trong mục này."
            : baseMessage;
        resetFeed(filteredPosts, message);
    };

    updateHeader();
    renderSubnav();

    const initialSearch = utils.getQueryParam("search") || "";
    handleSearch(initialSearch);

    if (loadMoreBtn) {
        loadMoreBtn.addEventListener("click", appendNextChunk);
    }

    updateLoadMoreVisibility();

    window.addEventListener("search:change", (event) => {
        handleSearch(event.detail || "");
    });
})();








