document.addEventListener("DOMContentLoaded", function () {
    const target = document.getElementById("live-build-commit");
    if (!target) return;

    fetch("https://api.github.com/repos/xerolinuxdev/xero-build/commits/main")
    .then(res => res.json())
    .then(data => {
        const sha = data.sha.substring(0, 7);
        const msg = data.commit.message.split("\n")[0];

        target.innerHTML = `
        <strong>Latest Commit :</strong> <code>${sha}</code> /
        <strong>Git Message :</strong> <em>${msg}</em>
        `;
    })
    .catch(err => {
        console.error("GitHub API error:", err);
        target.innerHTML = "<em>Could not load GitHub commit info</em>";
    });
});
