

function getUser(id) {
    const p = new Promise((resolve, reject) => {
        setTimeout(() => {
            let user = { userId: id, gitHubUsername: 'stanley' }
            resolve(user)
            //reject(new Error("User with id "+id+" not found"))
        }, 3000)
    })
    return p
}
function getRepositories(userName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let repos = { userName: userName, repos: ["repo1", "repo2"] }
            console.log(repos)
            resolve(repos)
        }, 2000)
    })
}
function getCommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ repository: repo, commits: ["commit1", "commit2"] })
            //reject(new Error("Something wrong happened"))
        })
    }, 1000)
}
async function display() {
    let user = await getUser(1)
    console.log(user)
    let repos = await getRepositories(user.gitHubUsername)
    console.log(repos)
    let commits = await getCommits(repos.repos[1])
    console.log(commits)
}
display()


