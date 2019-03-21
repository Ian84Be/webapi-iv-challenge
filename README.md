# Lambda School - webapi-iv-challenge
### Hosted at https://ian-be-webapi.herokuapp.com/
---
#### USERS
##### /api/users

- POST create new user https://ian-be-webapi.herokuapp.com/api/users
> {
>   "name":"newUserName",
> }

- GET read all users https://ian-be-webapi.herokuapp.com/api/users
- GET read user by id https://ian-be-webapi.herokuapp.com/api/users/:id
- PUT update user https://ian-be-webapi.herokuapp.com/api/users/:id
> {
>    "name":"newUserName"
> }

- DELETE delete user https://ian-be-webapi.herokuapp.com/api/users/:id

---
#### POSTS
##### /api/posts

- POST create new post https://ian-be-webapi.herokuapp.com/api/posts
> {
>   "user_id":"existingUserId",
>    "text":"newCommentText"
> }

- GET read all posts https://ian-be-webapi.herokuapp.com/api/posts
- GET read post by id https://ian-be-webapi.herokuapp.com/api/posts/:id
<!-- - PUT update post https://ian-be-webapi.herokuapp.com/api/posts/:id
> {
>   "user_id":"existingUserId",
>    "text":"newCommentText"
> } -->

<!-- - DELETE delete post https://ian-be-webapi.herokuapp.com/api/posts/:id -->