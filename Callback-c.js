
function getUser(id, callback) {
    setTimeout(() => {
        callback({ userId: id, gitHubUsername: 'stanley' })
    }, 2000)
}
function getRepositories(userName, callback) {
    setTimeout(() => {
        callback({ userName: userName, repos: ["repo1", "repo2"] })
    }, 2000)
}
function getCommits(repo, callback) {
    setTimeout(() => {
        callback({ repository: repo, commits: ["commit1", "commit2"] })
    }, 5000)
}
getUser(1, (user) => {
    console.log(user)
    getRepositories(user.gitHubUsername, (repos) => {
        console.log(repos)
        getCommits(repos.repos[1], (commits) => {
            console.log(commits)
        })
    })
})