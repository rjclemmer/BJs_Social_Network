# BJs Social Network

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

I built an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list using Express.js for routing, a MongoDB database, and the Mongoose ODM.

## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Screenshot

![Thumbnail](Assets/social_media_screenshot.png)

## Walkthrough

https://drive.google.com/file/d/10pEs4Z8sZadnOMvWe-Nr8xUhsLxqrncO/view

## Installation

To install the necessary dependencies, run the following command;

` npm i `

## Usage

After installation, use 

` npm start `

Use Insomnia to use routes.

 ## License
  MIT
  Copyright 2023 rjclemmer

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.;

## Acceptance Criteria

```md
GIVEN a social network API

WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database ✅

WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON ( I'm still having issues having thoughts be pushed into user thoughts array )

WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database ✅

WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list ✅
```

## Questions
If you have any questions about the repo, open an issue or contact me directly at clemmer.robert.j@gmail.com. You can find more of my work on GitHub at [rjclemmer](https://github.com/rjclemmer).

