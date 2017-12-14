# Boilerplate and logic for a well structured Node.js API including user CRUD and authentication
______

#### Steps to run locally:
- npm install
- touch ./config/env/development.js
- write to development.js:
```javascript
module.exports = {
  db: 'postgres://username:password@localhost/db-name',
  session_secret: '',
}
```
- crush it

#### For PROD, the following config/environment variables need to be set:
- DATABASE_URL,
- SESSION_SECRET,