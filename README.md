# CNAB Transactions (parse & read)

Microsservice, CQRS pattern and clean code and async call, I divide the problem creating sub modules as part of the project, where each of that have the only one responsability.

![Diagram of CNAB transactions challenge representing modules communication flow](/assets/cnab-transactions-challenge.jpg "Diagram of CNAB transactions challenge representing modules communication flow")

## :sparkles: Features

- Optimized for large CNAB file (Webworkers & Websocket)
- Assynchronous parsing (don't stuck user in front of screen waiting process the file)
- Read-only replica for queries (CQRS pattern)
- Two phase validation (syntax <> content)

## :wrench: Tools

Some tools help me during sorting data for solving this challenge.

- [Figma (Prototype, Diagrams)](https://www.figma.com/file/SojiZde1lqf1aJBHvYO3rK/cnab-transactions?type=design&node-id=0%3A1&mode=design&t=0TsjFKfLv9Kn7xup-1)
- [Github Projects (Task management)](https://github.com/leoelios/desafio-dev/projects?query=is%3Aopen)
- [Gitmoji (Emoji commit guide)](https://gitmoji.dev/)

## :tada: Live (try in cloud)

**(WIP)** In the future, a live will be available here.

## :rocket: Setup

**(WIP)** Simple guide to run completely the project locally.

---

Thanks for the challenge, I like that =)
