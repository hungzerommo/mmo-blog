(function () {
    const utils = window.SiteUtils;
    if (!utils) return;

    if (utils.setActiveNav) utils.setActiveNav("none");

    const resultsContainer = document.getElementById("searchResults");
    const headingEl = document.getElementById("searchHeading");
    const summaryEl = document.getElementById("searchSummary");
    const loadMoreBtn = document.getElementById("searchLoadMore");
    const loadMoreWrapper = document.getElementById("searchLoadMoreWrapper");
    const queryTerm = (utils.getQueryParam("q") || "").trim();

    const posts = utils.posts || [];
    const filtered = utils.filterPosts(queryTerm, posts);

    const state = {
        renderedCount: 0,
        pageSize: 9
    };

    const SUMMARY_DEFAULT = "Danh s\u00e1ch c\u00e1c b\u00e0i vi\u1ebft ph\u00f9 h\u1ee3p v\u1edbi t\u1eeb kh\u00f3a b\u1ea1n nh\u1eadp.";

    const updateStatus = () => {
        window.dispatchEvent(
            new CustomEvent("search:results", {
                detail: {
                    context: "search",
                    count: filtered.length,
                    keyword: queryTerm
                }
            })
        );
    };

    const updateHeadingAndSummary = () => {
        if (headingEl) {
            if (!queryTerm) {
                headingEl.textContent = "T\u1ea5t c\u1ea3 b\u00e0i vi\u1ebft";
            } else if (filtered.length) {
                headingEl.textContent = `T\u00ecm th\u1ea5y ${filtered.length} b\u00e0i vi\u1ebft cho "${queryTerm}".`;
            } else {
                headingEl.textContent = `Kh\u00f4ng t\u00ecm th\u1ea5y b\u00e0i vi\u1ebft cho "${queryTerm}".`;
            }
        }

        if (summaryEl) {
            summaryEl.textContent = SUMMARY_DEFAULT;
        }
    };

    const updateLoadMoreVisibility = () => {
        if (!loadMoreWrapper || !loadMoreBtn) return;
        const hasMore = state.renderedCount < filtered.length;
        loadMoreWrapper.hidden = !hasMore;
        loadMoreBtn.disabled = !hasMore;
    };

    const appendNextChunk = () => {
        if (!resultsContainer) return;
        if (state.renderedCount >= filtered.length) {
            updateLoadMoreVisibility();
            return;
        }

        const slice = filtered.slice(
            state.renderedCount,
            state.renderedCount + state.pageSize
        );

        slice.forEach((post) => {
            resultsContainer.appendChild(utils.renderPostCard(post));
        });

        state.renderedCount += slice.length;
        updateLoadMoreVisibility();
    };

    const renderResults = () => {
        if (!resultsContainer) return;

        resultsContainer.innerHTML = "";

        if (!filtered.length) {
            const empty = document.createElement("p");
            empty.className = "empty-state";
            empty.textContent = "Kh\u00f4ng t\u00ecm th\u1ea5y b\u00e0i vi\u1ebft ph\u00f9 h\u1ee3p. Th\u1eed c\u1ee5m t\u1eeb kh\u00e1c nh\u00e9!";
            resultsContainer.appendChild(empty);
        } else {
            appendNextChunk();
        }

        updateLoadMoreVisibility();
        updateStatus();
    };

    updateHeadingAndSummary();
    renderResults();

    if (loadMoreBtn) {
        loadMoreBtn.addEventListener("click", appendNextChunk);
    }
})();
