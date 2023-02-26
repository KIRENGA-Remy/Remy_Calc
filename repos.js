


console.log("process A")
setTimeout(() => {
    console.log("Async process")
}, 2000)
let user = getUser(1)
let myRepos = getRepositories(user.gihubUserName)
console.log(myRepos)
let commits = getCommits(myRepos.repos[0])
console.log(commits)
function getUser(userId) {
    return { userId: userId, gihubUserName: "Stanley" }
}
function getRepositories(userName) {
    return { userName: userName, repos: ["repo1", "repo2"] }
}
function getCommits(repo) {
    return { repo: repo, commits: ["commit1", "commit2"] }
}