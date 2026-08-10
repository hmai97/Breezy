## 2. Redesigned the "How It Works" Section

### Process Notes

I first looked at the existing HTML and CSS to understand how the three steps were structured. I wanted to keep the existing HTML as much as possible instead of rebuilding the entire section.

I used the browser's DevTools to inspect the existing elements and test CSS changes. This helped me understand the current layout and identify which elements I needed to target.

For the desktop version, I used **Flexbox** to place the three steps horizontally. I added a `::after` pseudo-element to the steps to create a connecting line between the numbered circles.

I adjusted the position and width of the connector so that it connects directly to the numbered circles instead of leaving a visible gap.

For the mobile version, I changed the timeline to a vertical layout using a media query at `768px`. I repositioned the numbered circles and changed the connector from a horizontal line to a vertical line.

I also added left padding to the step content so the title and description had enough space beside the numbered circles.

### 2. Added Hover and Scroll Interactions

For the hover effect, I wanted the timeline itself to stay in place instead of moving the entire step.

Because of that, I applied the transition to the numbered circle and title rather than the whole `.step`.

When the user hovers over a step:

- The numbered circle slightly scales up.
- The circle gets a shadow.
- The title moves slightly upward.
- The overall timeline stays in the same position.

I also added an `IntersectionObserver` to detect when the steps enter the user's viewport. This allows the step elements to reveal/animate as the user scrolls to the section instead of having the animation happen immediately when the page loads.

The observer watches the step elements and adds the appropriate class when they become visible.

### 3. Used AI to Help With the CSS

I used ChatGPT as a development assistant while working through the CSS and interaction behavior.

For example, I asked:

> "How can I add a horizontal connector line between the three `.step` elements using CSS, while making sure the last step does not have a connector line?"

ChatGPT suggested using a `::after` pseudo-element with:

```css
.step:not(:last-child)::after