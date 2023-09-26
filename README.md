# Social Network API

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Description

A social network API that will allow users to share their thoughts, create a friends list, and react to their friends' thoughts.

## Installation

git clone git@github.com:iggy-ziggy/Social-Network-API.git

After cloning, run `npm i` in your terminal to install dependencies. 

To start the program, run `npm run dev`. This will run the server with nodemon, updating whenever you make a change to the code.

## Usage

Using Insomnia or whatever program you prefer, the following routes will be available for testing:

### Create user and Get all users:
* `/api/users`


### Get, Update, and Delete a single user:
* `/api/users/:userId`

```json
// example data
{
  "username": "lernantino",
  "email": "lernantino@gmail.com"
}
```

### Add and Delete a friend from friend list:
* `/api/users/:userId/friends/:friendId`

### Create thought and Get all thoughts:
* `/api/thoughts`

```json
// example data
{
  "thoughtText": "Here's a cool thought...",
  "username": "lernantino",
  "userId": "5edff358a0fcb779aa7b118b"
}
```

### Get, Update, and Delete a single thought:
* `/api/thoughts/:thoughtId`

### Add and Delete reactions to thoughts:
* `/api/thoughts/:thoughtId/reactions`

### Images

* `Create User`

<img width="1151" alt="Screenshot 2023-09-26 at 12 03 39 PM" src="https://github.com/iggy-ziggy/Social-Network-API/assets/128410000/d459cdcd-384f-4bff-96e1-017329524204">

* `Create Thought`

<img width="1252" alt="Screenshot 2023-09-26 at 12 03 58 PM" src="https://github.com/iggy-ziggy/Social-Network-API/assets/128410000/d4404697-6fc4-4e21-98f9-de783df39c6c">

* `Add Reaction to Thought`

<img width="1444" alt="Screenshot 2023-09-26 at 12 04 12 PM" src="https://github.com/iggy-ziggy/Social-Network-API/assets/128410000/54a3cc05-b435-410f-be8e-0b0eb380ab9a">

* `Add Friend to Friend List`

<img width="1114" alt="Screenshot 2023-09-26 at 12 04 33 PM" src="https://github.com/iggy-ziggy/Social-Network-API/assets/128410000/e0cbee19-8b1a-4ac8-8aa3-889b3b099ac2">

### Demo

https://watch.screencastify.com/v/IUmMRwbsLSbKGZWOCFeT

## License
[Link to MIT License](https://opensource.org/licenses/MIT)

## Contributing

n/a

## Tests

n/a

## Questions

GitHub Profile: (https://github.com/iggy-ziggy)

If you have any questions, feel free to contact me at:
merkabafox@gmail.com

