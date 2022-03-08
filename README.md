# Banner with reminders

This is a repo to demonstrate how we could build a resusable reminder signup template to be shared between moment banners.

We have a higher order `WithReminder` component that has the logic for hiding/showing the reminder as well as the markup for the signup. As a second argument it takes customisation options to make small adjustments to the styles.

The benefits of this approach are that:

- we only need to build the sign up once, and can resuse it

The drawbacks are that:

- it's quite restrictive on design, i.e we can't align things in the main banner with the reminder signup
