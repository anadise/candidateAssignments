## Instructions

You will find technical tasks related to your desired position below.
Fork this repository, work on the tasks, and create a pull request.
Make sure you comment your code as needed.
Track your time and send an email with the link for the pull request and the time it took to complete once you are done.

Not being able to complete every task will NOT disqualify you as a candidate. Do your best and good luck!

### Tasks

- Add `.next/` to `.gitignore`. ## Done

- Fix the missing dependency error. ## Done

- Define the type of `children` in `./src/components/layouts/default.tsx'. ## Done

- On the index page, fetch data from `/api/clients` using the already imported custom `request` function to populate the table. Use a TypeScript interface to define a type in the `useState` you will implement. ## Done

- Make sure that the genders, names, and emails of clients are matching. Client avatars do not have to match with client genders. (\*\* Couldn't intrepret it correctly, Will discuss while demo)

- Make sure that the full names of clients on the table are displayed. Hint: Use `Array.prototype.map()` to reformat data. ## Done

- Make sure that the client emails on the table are selectable and copiable by the user. ## Done

- Define the custom color `#EE964B` as `sandy` in Tailwind. ## Done

- Get a query parameter named `highlight` from the URL in the index page using `useEffect()`. ## Done

- If there is a client with the same ID as `highlight`'s value, change their background color on the table to `sandy`. ## Done

- Use the styling from `./src/examples/modals.tsx` and `./src/examples/forms.tsx` to create a Formik form with Yup validation for registering a client inside a modal. ## Done

- Make the 'Register new client' button open the modal with the form inside. ## Done

- Complete the `onRegister` function to make a `POST` request to `/api/clients` with the form data using the already imported custom `request` function. ## Done

## Note:

- tailwind configuration had missing directory of examples due to which I couldn't use utility classes so I had to add examples directory to the tailwind.config.js
