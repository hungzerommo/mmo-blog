(function () {
    const page = document.body.dataset.page || "home";
    const posts = (window.BLOG_DATA && window.BLOG_DATA.posts) || [];
    const categories = (window.BLOG_DATA && window.BLOG_DATA.categories) || {};
    const categoryGroups = (window.BLOG_DATA && window.BLOG_DATA.categoryGroups) || [];
    const categoryToGroup = (window.BLOG_DATA && window.BLOG_DATA.categoryToGroup) || {};

    const formatDate = (value) => {
        if (!value) return "";
        try {
            const date = new Date(value);
            return new Intl.DateTimeFormat("vi-VN", {
                day: "2-digit",
                month: "short",
                year: "numeric"
            }).format(date);
        } catch (error) {
            return value;
        }
    };

    const getQueryParam = (key) => {
        const params = new URLSearchParams(window.location.search);
        return params.get(key) || "";
    };

    const getGroupForCategory = (categoryId) => categoryToGroup[categoryId] || null;

    const getGroupById = (groupId) =>
        categoryGroups.find((group) => group.id === groupId) || null;

    const getCategoryMeta = (categoryId) => categories[categoryId] || null;

    const getCategoryTitle = (categoryId) => {
        const meta = getCategoryMeta(categoryId);
        if (!meta) return categoryId || "";
        return meta.title || categoryId;
    };

    const getGroupTitle = (categoryId) => {
        const groupId = getGroupForCategory(categoryId);
        if (!groupId) return "";
        const group = getGroupById(groupId);
        return group ? group.title : "";
    };

    const buildCategoryHref = (categoryId, groupId) => {
        if (groupId) {
            return `category.html?group=${encodeURIComponent(groupId)}&category=${encodeURIComponent(categoryId)}`;
        }
        return `category.html?category=${encodeURIComponent(categoryId)}`;
    };

    const getTagMeta = (tagId) => {
        if (!tagId) return null;
        if (categories[tagId]) {
            const categoryMeta = categories[tagId];
            const groupId = categoryMeta.group || getGroupForCategory(tagId);
            return {
                id: tagId,
                title: categoryMeta.title || tagId,
                href: buildCategoryHref(tagId, groupId)
            };
        }
        const group = getGroupById(tagId);
        if (group) {
            return {
                id: group.id,
                title: group.title,
                href: `category.html?group=${encodeURIComponent(group.id)}`
            };
        }
        return {
            id: tagId,
            title: tagId,
            href: "#"
        };
    };

    const getCategoriesForGroup = (groupId) => {
        const group = getGroupById(groupId);
        if (!group) return [];
        return group.categories.map((item) => ({
            id: item.id,
            title: item.title,
            ...(categories[item.id] || {})
        }));
    };

    const filterPostsByGroup = (groupId, sourcePosts = posts) => {
        if (!groupId) return sourcePosts;
        return sourcePosts.filter((post) => post.group === groupId);
    };

    const filterPostsByCategoryId = (categoryId, sourcePosts = posts) => {
        if (!categoryId) return sourcePosts;
        return sourcePosts.filter((post) => post.category === categoryId);
    };

    const filterPosts = (keyword, sourcePosts = posts) => {
        if (!keyword) return sourcePosts;
        const term = keyword.trim().toLowerCase();
        return sourcePosts.filter((post) => {
            const tagText = (post.tags || []).join(" ");
            const haystack = `${post.title} ${post.excerpt} ${post.content} ${tagText}`.toLowerCase();
            return haystack.includes(term);
        });
    };

    const renderPostCard = (post) => {
        const article = document.createElement("article");
        article.className = "post-card";

        const anchor = document.createElement("a");
        anchor.className = "post-card-link";
        anchor.href = `article.html?id=${encodeURIComponent(post.id)}`;

        const imageWrapper = document.createElement("div");
        imageWrapper.className = "post-card-image";
        const image = document.createElement("img");
        image.src = post.thumbnail;
        image.alt = post.title;
        imageWrapper.appendChild(image);

        const body = document.createElement("div");
        body.className = "post-card-body";

        const categoryEl = document.createElement("p");
        categoryEl.className = "post-card-category";
        const groupTitle = getGroupTitle(post.category);
        categoryEl.textContent = groupTitle || getCategoryTitle(post.category);

        const titleEl = document.createElement("h3");
        titleEl.className = "post-card-title";
        titleEl.textContent = post.title;

        const excerptEl = document.createElement("p");
        excerptEl.className = "post-card-excerpt";
        excerptEl.textContent = post.excerpt;

        const tagsEl = document.createElement("ul");
        tagsEl.className = "post-card-tags";
        const mainTagId = getGroupForCategory(post.category);
        (post.tags || []).forEach((tagId) => {
            if (tagId === mainTagId) return;
            const meta = getTagMeta(tagId);
            if (!meta) return;
            const item = document.createElement("li");
            item.className = "post-card-tag";
            const link = document.createElement("a");
            link.href = meta.href;
            link.textContent = meta.title;
            link.dataset.tag = meta.id;
            item.appendChild(link);
            tagsEl.appendChild(item);
        });
        if (!tagsEl.childNodes.length) tagsEl.remove();

        const dateEl = document.createElement("time");
        dateEl.className = "post-card-date";
        dateEl.dateTime = post.date;
        dateEl.textContent = formatDate(post.date);

        body.append(categoryEl, titleEl, excerptEl);
        if (tagsEl.childNodes.length) {
        body.appendChild(tagsEl);
    }
    body.append(dateEl);
        anchor.append(imageWrapper, body);
        article.appendChild(anchor);
        return article;
    };

    const updateYear = () => {
        const yearEl = document.getElementById("currentYear");
        if (yearEl) yearEl.textContent = new Date().getFullYear();
    };

    const setActiveNav = (key) => {
        const navLinks = document.querySelectorAll(".nav-list a[data-nav]");
        const navItems = document.querySelectorAll(".nav-item");

        navLinks.forEach((link) => link.classList.remove("is-active"));
        navItems.forEach((item) => item.classList.remove("is-current"));

        if (!key || key === "none") return;

        navLinks.forEach((link) => {
            if (link.dataset.nav !== key) return;
            link.classList.add("is-active");

            const parentItem = link.closest(".nav-item");
            if (!parentItem) return;

            parentItem.classList.add("is-current");

            const primaryLink = parentItem.querySelector(".nav-link");
            if (primaryLink && primaryLink !== link) {
                primaryLink.classList.add("is-active");
            }
        });
    };

    const renderPrimaryNav = () => {
        const navList = document.getElementById("primaryNav");
        if (!navList) return;

        navList.querySelectorAll("[data-dynamic=\"true\"]").forEach((item) => item.remove());

        const primaryOrder = [
            "kiem-tien-online",
            "phan-mem",
            "ai",
            "chia-se-mmo",
            "huong-dan-kien-thuc",
            "tin-tuc-cap-nhat"
        ];

        const orderedGroups = primaryOrder
            .map((id) => categoryGroups.find((group) => group.id === id))
            .filter(Boolean);

        orderedGroups.forEach((group) => {
            const item = document.createElement("li");
            item.className = "nav-item";
            item.dataset.dynamic = "true";

            const trigger = document.createElement("div");
            trigger.className = "nav-trigger";

            const link = document.createElement("a");
            link.className = "nav-link";
            link.href = `category.html?group=${encodeURIComponent(group.id)}`;
            link.textContent = group.title;
            link.dataset.nav = group.id;
            trigger.appendChild(link);
            item.appendChild(trigger);

            if (group.categories && group.categories.length) {
                item.classList.add("nav-item--has-children");

                const toggle = document.createElement("button");
                toggle.type = "button";
                toggle.className = "nav-dropdown-toggle";
                toggle.setAttribute("aria-expanded", "false");
                toggle.setAttribute("aria-label", `Mở danh mục ${group.title}`);
                toggle.innerHTML = '<span class="nav-dropdown-toggle__icon" aria-hidden="true"></span>';
                trigger.appendChild(toggle);

                const dropdown = document.createElement("div");
                dropdown.className = "nav-dropdown";

                const list = document.createElement("ul");
                list.className = "nav-dropdown__list";

                group.categories.forEach((category) => {
                    const dropdownItem = document.createElement("li");
                    dropdownItem.className = "nav-dropdown__item";
                    const anchor = document.createElement("a");
                    anchor.className = "nav-dropdown__link";
                    anchor.href = `category.html?group=${encodeURIComponent(group.id)}&category=${encodeURIComponent(category.id)}`;
                    anchor.textContent = category.title;
                    anchor.dataset.nav = category.id;
                    dropdownItem.appendChild(anchor);
                    list.appendChild(dropdownItem);
                });

                dropdown.appendChild(list);
                item.appendChild(dropdown);
            }

            navList.appendChild(item);
        });
    };

    const initNavigation = () => {
        const navToggle = document.querySelector(".nav-toggle");
        const mainNav = document.querySelector(".main-nav");
        if (!navToggle || !mainNav) return;

        const navItems = () =>
            Array.from(mainNav.querySelectorAll(".nav-item--has-children"));

        const closeDropdowns = () => {
            navItems().forEach((item) => {
                item.classList.remove("is-open");
                const button = item.querySelector(".nav-dropdown-toggle");
                if (button) button.setAttribute("aria-expanded", "false");
            });
        };

        const closeNav = () => {
            mainNav.classList.remove("open");
            navToggle.setAttribute("aria-expanded", "false");
            closeDropdowns();
        };

        navToggle.addEventListener("click", () => {
            const isOpen = mainNav.classList.toggle("open");
            navToggle.setAttribute("aria-expanded", String(isOpen));
            if (!isOpen) closeDropdowns();
        });

        mainNav.addEventListener("click", (event) => {
            if (event.target === mainNav) closeNav();
        });

        mainNav.querySelectorAll("a")
            .forEach((link) => link.addEventListener("click", () => closeNav()));

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") closeNav();
        });

        document.addEventListener("click", (event) => {
            if (!mainNav.contains(event.target) && !navToggle.contains(event.target)) {
                closeNav();
            }
        });

        navItems().forEach((item) => {
            const button = item.querySelector(".nav-dropdown-toggle");
            const dropdown = item.querySelector(".nav-dropdown");
            if (!button) return;

            let hoverTimeout = null;

            const openItem = () => {
                closeDropdowns();
                item.classList.add("is-open");
                button.setAttribute("aria-expanded", "true");
            };

            const closeItem = () => {
                item.classList.remove("is-open");
                button.setAttribute("aria-expanded", "false");
            };

            const scheduleClose = () => {
                if (window.matchMedia("(max-width: 900px)").matches) return;
                clearTimeout(hoverTimeout);
                hoverTimeout = setTimeout(() => closeItem(), 120);
            };

            const cancelClose = () => {
                clearTimeout(hoverTimeout);
            };

            button.addEventListener("click", (event) => {
                event.preventDefault();
                event.stopPropagation();

                const alreadyOpen = item.classList.contains("is-open");
                closeDropdowns();

                if (!alreadyOpen) {
                    openItem();
                } else {
                    closeItem();
                }
            });

            item.addEventListener("mouseenter", () => {
                if (window.matchMedia("(max-width: 900px)").matches) return;
                cancelClose();
                openItem();
            });

            item.addEventListener("mouseleave", () => {
                if (window.matchMedia("(max-width: 900px)").matches) return;
                scheduleClose();
            });

            if (dropdown) {
                dropdown.addEventListener("mouseenter", cancelClose);
                dropdown.addEventListener("mouseleave", scheduleClose);
            }
        });
    };

    const initSearch = () => {
        const searchInput = document.getElementById("searchInput");
        const searchButton = document.getElementById("searchButton");
        const searchStatus = document.getElementById("searchStatus");
        const mainNav = document.querySelector(".main-nav");
        const navToggle = document.querySelector(".nav-toggle");
        if (!searchInput) return;

        const closeNavIfOpen = () => {
            if (mainNav && mainNav.classList.contains("open")) {
                mainNav.classList.remove("open");
                if (navToggle) navToggle.setAttribute("aria-expanded", "false");
            }
        };

        const performSearch = (rawValue) => {
            const value = rawValue.trim();
            if (!value) return;
            closeNavIfOpen();
            window.location.href = `search.html?q=${encodeURIComponent(value)}`;
        };

        if (searchInput.form) {
            searchInput.form.addEventListener("submit", (event) => {
                event.preventDefault();
                performSearch(searchInput.value);
            });
        }

        if (searchButton) {
            searchButton.addEventListener("click", () => performSearch(searchInput.value));
        }

        searchInput.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                event.preventDefault();
                performSearch(searchInput.value);
            }
        });

        searchInput.addEventListener("input", () => {
            if (!searchInput.value.trim() && searchStatus) {
                searchStatus.textContent = "";
            }
        });

        window.addEventListener("search:results", (event) => {
            if (!searchStatus) return;
            const { keyword = "", count, context } = event.detail || {};
            if (context === "search") {
                searchStatus.textContent = "";
                return;
            }
            if (!keyword) {
                searchStatus.textContent = "";
            } else if (count) {
                searchStatus.textContent = `T\u00ECm th\u1EA5y ${count} b\u00E0i vi\u1EBFt cho "${keyword}".`;
            } else {
                searchStatus.textContent = `Kh\u00F4ng t\u00ECm th\u1EA5y b\u00E0i vi\u1EBFt cho "${keyword}".`;
            }
        });
    };

    const highlightNavForPage = () => {
        if (page === "home") {
            setActiveNav("home");
        } else if (page === "search") {
            setActiveNav("none");
        } else {
            setActiveNav("none");
        }
    };

    updateYear();
    renderPrimaryNav();
    highlightNavForPage();
    initNavigation();
    initSearch();

    window.SiteUtils = {
        page,
        posts,
        categories,
        categoryGroups,
        categoryToGroup,
        formatDate,
        filterPosts,
        filterPostsByGroup,
        filterPostsByCategoryId,
        getCategoryMeta,
        getCategoryTitle,
        getCategoriesForGroup,
        getGroupById,
        getGroupForCategory,
        getGroupTitle,
        getTagMeta,
        getQueryParam,
        renderPostCard,
        setActiveNav
    };
})();


