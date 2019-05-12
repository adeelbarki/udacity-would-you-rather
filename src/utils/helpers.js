export function formatDate(timestamp) {
    const d = new Date(timestamp)
    const time = d.toLocaleTimeString('en-US')
    return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}

export function formatQuestion(question, author) {
    const { optionOne, optionTwo, timestamp } = question
    const { name, avatarURL } = author

    return {
        name,
        timestamp,
        avatar: avatarURL,
        optionOne: optionOne.text,
        optionTwo: optionTwo.text,
    }
}