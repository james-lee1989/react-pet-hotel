# Build a scrappy form management app.

- Turn off AI
- Use `const [location, setLocation] = useLocation()` from `wouter` package for route navigation.
  - `setLocation(PATH)` to navigate to a route.
- There is no api server, use `apiLogin`, `apiGetForms`, `apiGetForm`, `apiUpdateForm` from `src/api/index.ts` to simulate the api calls.

## Pages
- Home Page
  - Redirect to Login Page if the user is not logged in.
  - If the user has the `editor` role then the page should also display a list of forms
  - If not, then display “You don’t have access”
  - Display a loading indicator while the forms are being fetched

- Login Page
  - The login page should accept a text input.
  - Value can either be `john` or `jane`
  - If the login is successful, redirect to the home page

- Form Edit Page
  - Redirect to Login Page if the user is not logged in.
  - Form has a list of questions
  - The user can add/delete a question
  - Saving the form should save the questions and return to the home page
  - Bonus: The user can reorder the questions

## Types

```
export interface Form {
  id: string;
  title: string;
  questions: string[];
}

export interface User {
  username: string;
  role: 'editor' | 'viewer';
}
```

## API

- `/api/v1/login`
  - POST
  - Body: { username: string }
  - Returns: User

- `/api/v1/forms`
  - GET
  - Returns: Form[]
  - Can take a while to return the response

- `/api/v1/forms/:id`
  - GET
  - Returns: Form

- `/api/v1/forms/:id`
  - PUT
  - Body: Form
  - Returns: Form