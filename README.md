# Breezy — Premium Artisanal Air

Breezy is a playful landing page for a fictional premium artisanal air subscription service. This project was built as a frontend developer code test, with a focus on responsive design, reusable React components, interactive UI, and a fun product experience.

**Tech stack:** React, Vite, JavaScript, React Router, CSS
**Hosting:** Vercel
**Live URL:** https://breezy-orpin.vercel.app/

**Github Repository Link:** https://github.com/hmai97/Breezy
---

## 1. Hosting

### Where did you deploy it and why?

The site is deployed on **Vercel**.

I chose Vercel because it is simple to use with React and Vite projects and works well with GitHub. It also provides automatic deployments when changes are pushed to the repository.

Some benefits I used include:

* GitHub integration
* Automatic deployments
* HTTPS
* Production builds
* Preview deployments
* Simple deployment setup

For this project, Vercel allowed me to deploy the frontend without having to manage a server.

The application uses React Router, so I also needed to configure Vercel to handle client-side routes correctly. Without this, refreshing a route such as `/pricing` could return a 404 because Vercel would look for a physical `/pricing` file instead of loading the React application.

---

## 2. CMS / Content Management

### How would a non-technical marketing person update the site?

Currently, most of the site's content is stored directly in React components and JavaScript data structures.

For example, the Air Plan Finder options are stored as JavaScript data:

```js
const environments = [
  {
    id: 'alpine',
    emoji: '🌲',
    label: 'Alpine',
    sub: 'Crisp & clean',
  },
  // ...
]
```

This works well for a small project, but it means a marketing person would need a developer to change the content and redeploy the application.

### What would I change?

For a production website, I would use a headless CMS such as Contentful, Sanity, or Strapi.

Marketing users could then update things such as:

* Hero text
* Pricing descriptions
* Feature descriptions
* Testimonials
* FAQ content
* Images
* Promotional content
* Air Plan Finder options

The React application could retrieve this content through an API or CMS SDK.

This would allow marketing users to update content without changing the React source code.

---

## 3. Security

### What security considerations did you account for?

This project is mainly a frontend application, so it does not handle sensitive user data or authentication.

I considered:

* Not hardcoding API keys or secrets
* Not storing sensitive user information
* Avoiding unnecessary third-party scripts
* Using React's normal rendering instead of injecting arbitrary HTML
* Using HTTPS through Vercel
* Keeping npm dependencies managed and up to date
* Validating the newsletter email on the client side

### What would I add for production?

For a production application, I would add:

* Server-side validation
* Rate limiting
* Secure API endpoints
* Content Security Policy headers
* Dependency vulnerability scanning
* Environment variables for secrets
* Server-side validation for submitted data
* Spam protection for the newsletter form
* Proper authentication and authorization if user accounts were added

I would also add appropriate security headers through the hosting platform or server.

---

## 4. Code Maintenance

### How would another developer pick up and maintain this codebase?

I separated the application into reusable React components and pages.

The general structure is:

```text
src/
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── PricingCards.jsx
│   ├── Newsletter.jsx
│   ├── AirPlanFinder.jsx
│   └── ...
│
├── pages/
│   ├── Home.jsx
│   ├── Pricing.jsx
│   └── FAQ.jsx
│
├── App.jsx
├── App.css
└── ...
```

The pages handle the main routes, while reusable sections are kept in the `components` directory.

I also kept the Air Plan Finder's data separate from the JSX where possible. Environments, purposes, rituals, names, and metrics are stored as data structures.

For example:

```js
const rituals = [
  {
    id: 'morning',
    emoji: '🌅',
    label: 'Morning',
    sub: 'Start the day fresh.',
  },
  // ...
]
```

This makes it easier to change or add options without rewriting the component itself.

### What would I improve?

For a larger project, I would add:

* TypeScript
* Automated tests
* ESLint and Prettier
* More component-level separation
* Dedicated data/configuration files
* Component documentation
* CI checks before deployment

---

## 5. Performance

### What did you do to optimize performance?

The project uses Vite for development and production builds.

The production build:

* Bundles JavaScript and CSS
* Minifies the application assets
* Creates production-ready files
* Uses hashed asset filenames for caching
* Removes development-only overhead

I also kept the project relatively lightweight and avoided adding libraries that were not necessary.

The Air Plan Finder performs its recommendation calculations in the browser, so changing an answer does not require a network request.

The UI transitions are also handled with CSS instead of adding an animation library.

I tested the production build locally using:

```bash
npm run build
```

### What would I improve?

For a larger production site, I would consider:

* Optimizing and compressing images
* Using responsive image formats
* Lazy loading images
* Route-based code splitting
* Reducing third-party scripts
* Monitoring Core Web Vitals
* Using Lighthouse for performance testing
* Improving caching strategies

---

## 6. New Feature — Find Your Air Plan

### What feature did you add?

I added an interactive **Find Your Air Plan** experience.

Instead of only showing static marketing content, visitors can answer three questions and receive a personalized fictional air profile.

The three steps are:

### Step 1 — Choose an environment

* Alpine
* Coastal
* Cloud
* Volcanic

### Step 2 — Choose what they are breathing for

* Focus
* Energy
* Relaxation
* Better Sleep

### Step 3 — Choose their air ritual

* Morning
* Workday
* Evening
* Late Night

After the visitor completes all three steps, the application generates a personalized result.

For example:

**THE ALPINE ARCHITECT**

with an atmosphere such as:

**PEAK FOCUS**

and a recommended subscription plan.

### Why did I choose it?

I wanted the new feature to feel like part of the existing Breezy product instead of feeling like a separate coding-test feature.

The original website is playful and fictional, so I wanted the new feature to continue that idea.

The quiz also gives visitors something interactive to do before reaching the pricing section.

I kept the questions simple so the visitor can make one decision at a time without making the experience feel like a long survey.

### How does it work technically?

The feature uses React state to track the visitor's answers:

```js
const [environment, setEnvironment] = useState(null)
const [purpose, setPurpose] = useState(null)
const [ritual, setRitual] = useState(null)
```

Each question is generated from an array of options.

Once all three answers are selected, the `getResult()` function combines the selections and determines the result.

The metrics are stored as predefined values:

```js
const metrics = {
  alpine: {
    focus: [94, 72, 88],
    energy: [90, 60, 96],
    relax: [88, 94, 64],
    sleep: [90, 96, 48],
  },
  // ...
}
```

The first two selections determine which metric values are used:

```js
const [crisp, calm, energy] =
  metrics[environmentId][purposeId]
```

These values are then displayed as percentage bars in the result.

I also calculate the fictional nostril compatibility score from the three metrics:

```js
const nostrilCompatibility =
  Math.min(99, Math.round((crisp + calm + energy) / 3))
```

These metrics are fictional product logic rather than scientific measurements. They are mainly used to make the result feel personalized and consistent.

The subscription recommendation is also based on the user's choices. For example, Focus and Energy selections can lead to the **Power Inhaler** recommendation, while other combinations can lead to the **Casual Breather** plan.

The final result also includes a button that takes the visitor to the pricing section:

```js
navigate('/pricing#plans')
```

### What would I improve with more time?

I would make the recommendation system more flexible and personalized.

Some improvements could include:

* More questions
* Weighted scoring
* More air profiles
* More recommendation combinations
* Animated result generation
* Different visual themes for each environment
* A shareable result
* Saving a user's result between sessions
* Connecting recommendations more directly to specific pricing plans

For a production application, I could also move the recommendation rules into a CMS or backend so the product or marketing team could change the rules without modifying the React code.

---

# Process Notes

## 1. Started by Breaking Down the Original Page

I first took the original single-page HTML/CSS/JavaScript project and divided the original page into separate sections.

I created reusable components for sections such as:

* Header
* Hero
* Logos
* Features
* How It Works
* Pricing Cards
* Stats
* Testimonials
* Newsletter
* Footer

Doing this first made the project easier to understand before adding the new feature.

---

## 2. Converted the Project to React

After separating the sections, I converted them into React components.

I created separate pages for:

* Home
* Pricing
* FAQ

The reusable sections were placed in the `components` directory.

I also moved the original JavaScript interactions into React state and event handlers where appropriate.

For example, the original toast functionality was moved into `App.jsx` so it could be shared by components such as the Hero, Pricing Cards, and Newsletter.

---

## 3. Added React Router

I added React Router to handle navigation between the pages.

The main routes are:

```text
/
 /pricing
 /faq
```

I also used URL hashes for navigation to specific sections, such as:

```text
/pricing#plans
```

This allowed the Air Plan Finder to send the visitor directly to the pricing section after they received their recommendation.

During deployment, I found that refreshing a nested route such as `/pricing` could return a 404 on Vercel.

I fixed this by adding SPA routing configuration so Vercel serves the React application for those routes.

---

## 4. Added Shared Toast Notifications

The original project used a `showToast()` function for user feedback.

Instead of creating separate toast logic inside each component, I moved the toast state and function into `App.jsx`:

```js
const [toast, setToast] = useState("");

const showToast = (message) => {
  setToast(message);

  setTimeout(() => {
    setToast("");
  }, 3200);
};
```

I then passed `showToast` to the components that needed it.

This allowed the different parts of the application to use the same notification system.

---

## 5. Designed the New Feature

For the required new feature, I wanted to add something that connected directly to the fictional Breezy product.

I decided to create **Find Your Air Plan**.

The feature asks visitors three questions:

1. What environment they prefer
2. What they are breathing for
3. When they want to use their air

I chose these questions because they gave me enough information to create a personalized result while keeping the interaction short.

I also wanted the choices to match the playful tone of the original website.

---

## 6. Built the Air Plan Finder with React State

I used React state to keep track of the visitor's selections:

```js
const [environment, setEnvironment] = useState(null);
const [purpose, setPurpose] = useState(null);
const [ritual, setRitual] = useState(null);
```

The quiz is divided into three steps.

The Next button is disabled until the visitor selects an answer.

Once an answer is selected, the visitor can continue to the next step.

After the third answer, the application generates the personalized result.

I also added:

* Back navigation
* Restart functionality
* Selected card states
* Progress indicators
* CSS transitions
* Responsive layouts

---

## 7. Created the Recommendation and Metric Logic

One part I had to work through was deciding how the application should determine the final recommendation and metrics.

I used AI assistance to help me think through how the metric system could work and how the different answers could affect the result.

The metrics include:

* Crispness
* Calm
* Energy
* Nostril compatibility

I decided to use predefined values rather than randomly generating numbers. This makes the results predictable and easier to maintain.

For example:

```js
const metrics = {
  alpine: {
    focus: [94, 72, 88],
    energy: [90, 60, 96],
    relax: [88, 94, 64],
    sleep: [90, 96, 48],
  },
  // ...
};
```

The selected environment and purpose are used to retrieve the metric values:

```js
const [crisp, calm, energy] =
  metrics[environmentId][purposeId];
```

The three values are then displayed as percentage bars.

I also created a fictional nostril compatibility score:

```js
const nostrilCompatibility =
  Math.min(99, Math.round((crisp + calm + energy) / 3));
```

The recommendation logic also uses the visitor's selections to determine which fictional plan should be recommended.

---

## 8. Connected the Feature to Pricing

I wanted the feature to have a clear next step instead of ending after the result.

After receiving their personalized air profile, visitors can click:

**Experience Your Air →**

This uses React Router to navigate to:

```js
navigate('/pricing#plans');
```

The visitor is then taken directly to the pricing section.

---

## 9. Refined the User Experience

While testing the quiz, I noticed that showing everything at once made the interface feel more cluttered.

I changed the interaction so the visitor focuses on one question at a time.

The Next button only becomes available after the visitor selects an answer.

I also added a Back button so users can return to the previous question and a Restart button on the result screen so they can try another combination.

---

## 10. Tested and Deployed

After implementing the feature, I tested the application locally and created a production build using:

```bash
npm run build
```

I tested:

* Page navigation
* Header links
* Pricing navigation
* FAQ navigation
* React Router routes
* Browser refreshes
* Air Plan Finder selections
* Back button
* Restart button
* Pricing recommendations
* Responsive layouts
* Vercel deployment

I also fixed issues found during deployment, including SPA routing and navigation to the correct pricing section.

---

# AI Assistance

I used AI as a development assistant during the project.

I mainly used it for:

* Explaining React concepts
* Debugging JSX and JavaScript issues
* Working through CSS layout problems
* React Router troubleshooting
* Vercel deployment troubleshooting
* Thinking through the Air Plan Finder structure
* Designing the recommendation metrics
* Working through how the user's answers should affect the final result

For the Air Plan Finder specifically, I asked AI for help thinking through the **metric design and calculation logic**, including how Crispness, Calm, Energy, and the fictional Nostril Compatibility score could be calculated.

I then adapted the suggestions to fit my existing code and tested the behavior myself.

I did not treat AI-generated suggestions as final code. I reviewed them, changed them when needed, and made sure I understood how the resulting code worked.

The final feature structure, UI decisions, content, styling, and product direction were my own decisions.
