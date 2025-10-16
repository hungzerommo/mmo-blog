(function () {
    const utils = window.SiteUtils;
    if (!utils) return;

    const postId = utils.getQueryParam("id");
    const post = utils.posts.find((item) => item.id === postId);

    if (utils.setActiveNav) {
        const navKey =
            post && utils.categories && utils.categories[post.category]
                ? post.category
                : post && post.group
                ? post.group
                : "none";
        utils.setActiveNav(navKey);
    }

    const titleEl = document.getElementById("articleTitle");
    const categoryEl = document.getElementById("articleCategory");
    const dateEl = document.getElementById("articleDate");
    const contentEl = document.getElementById("articleContent");
    const coverEl = document.getElementById("articleCover");
    const coverImg = document.getElementById("articleImage");
    const coverCaption = document.getElementById("articleImageCaption");
    const relatedContainer = document.getElementById("relatedPosts");
    const breadcrumbCurrent = document.getElementById("breadcrumbCurrent");
    const breadcrumbLink = document.getElementById("breadcrumbCategoryLink");
    const tagsEl = document.getElementById("articleTags");

    const renderRelated = (currentPost) => {
        if (!relatedContainer) return;
        relatedContainer.innerHTML = "";
        const related = utils.posts
            .filter(
                (item) =>
                    item.id !== currentPost.id &&
                    item.category.toLowerCase() === currentPost.category.toLowerCase()
            )
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, 4);

        if (!related.length) {
            const note = document.createElement("p");
            note.className = "empty-state";
            note.textContent = "Chưa có bài viết liên quan cho chủ đề này.";
            relatedContainer.appendChild(note);
            return;
        }

        related.forEach((item) => relatedContainer.appendChild(utils.renderPostCard(item)));
    };

        if (!post) {
        if (titleEl) titleEl.textContent = "Không tìm thấy bài viết";
        if (contentEl) {
            contentEl.innerHTML =
                "<p>Xin lỗi, bài viết bạn tìm kiếm có thể đã bị gỡ hoặc đường dẫn không hợp lệ.</p>";
        }
        if (relatedContainer) relatedContainer.innerHTML = "";
        if (breadcrumbCurrent) breadcrumbCurrent.textContent = "Không tìm thấy";
        return;
    }

    document.title = `${post.title} | MMO Insight`;

    if (titleEl) titleEl.textContent = post.title;

    const categoryId = post.category;
    const categoryTitle = utils.getCategoryTitle(categoryId);
    const categoryTagMeta = utils.getTagMeta(categoryId);

    if (categoryEl) {
        if (categoryTagMeta) {
            categoryEl.innerHTML = `<a href="${categoryTagMeta.href}">${categoryTagMeta.title}</a>`;
        } else {
            categoryEl.textContent = categoryTitle;
        }
    }

    if (breadcrumbCurrent) breadcrumbCurrent.textContent = post.title;
    if (breadcrumbLink) {
        if (categoryTagMeta) {
            breadcrumbLink.href = categoryTagMeta.href;
            breadcrumbLink.textContent = categoryTagMeta.title;
        } else {
            breadcrumbLink.href = `category.html?category=${encodeURIComponent(categoryId)}`;
            breadcrumbLink.textContent = categoryTitle;
        }
    }

    if (dateEl) {
        dateEl.textContent = utils.formatDate(post.date);
        dateEl.dateTime = post.date;
    }

    if (tagsEl) {
        tagsEl.innerHTML = "";
        (post.tags || []).forEach((tagId) => {
            const meta = utils.getTagMeta(tagId);
            if (!meta) return;
            const item = document.createElement("li");
            item.className = "article-tag";
            if (post.group && meta.id === post.group) {
                item.classList.add("is-primary");
            }
            const link = document.createElement("a");
            link.href = meta.href;
            link.textContent = meta.title;
            item.appendChild(link);
            tagsEl.appendChild(item);
        });
        tagsEl.hidden = !tagsEl.childElementCount;
    }

    if (contentEl) {
        contentEl.innerHTML = post.content;
    }

    if (coverEl && coverImg) {
        coverImg.src = post.thumbnail;
        coverImg.alt = post.title;
        if (coverCaption) {
            if (post.coverCaption) {
                coverCaption.textContent = post.coverCaption;
                coverCaption.hidden = false;
            } else {
                coverCaption.textContent = "";
                coverCaption.hidden = true;
            }
        }
        coverEl.hidden = false;
    }

    renderRelated(post);
})();





