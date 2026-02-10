# RN Design System ✨

A minimal React Native design system built for real apps. Easy to use, customize, and scale.

Made with ❤️ for the React Native community!

> These are not just UI components. They are a complete design system with components and screens. Reusable, delightful, and well-designed with cleaner code for faster development.

> Note:
> _All components and screens are created using Expo with file-based routing._

### UI Components

- [Button](#button)
- [Input](#input)
- [Spacer](#spacer)
- [Divider](#divider)
- [Badge](#badge)
- [Tabs](#tabs)

## 🎯 UI Components

### Button

- Multiple Variants
- Loading states
- Support Icon

![Button Component](/assets/images/components/button.jpeg)

### Input

- Clean and minimal UI
- Support Icon
- Login screen demo

![Input Component](/assets/images/components/input.jpeg)

### Spacer

- Add space between elements
- horizontal and vertical space
- Control spacing using props

![Spacer Component](/assets/images/components/spacer.jpeg)

### Divider

- Separate sections
- plain and dashed line
- support text

![Divider Component](/assets/images/components/divider.jpeg)

### Badge

- multiple variants
- easy to customize and add more styles

![Badge Component](/assets/images/components/status-badge.jpeg)

### Tabs

- Filter tabs
- Minimal UI
- Active state

![Tabs Component](/assets/images/components/filter-tabs.jpeg)

## 📱 Screens

### Login Screen

A fully-featured, production-ready authentication screen.
![Login Screen](/assets/images/screens//login%20screen%20ui.jpeg)

## 📁 Project Structure

```
├── app/
│   ├── index.tsx                    # Home page with component showcase
│   ├── screens/
│   │   └── login.tsx                # Login screen route
│   └── _layout.tsx                  # Root layout
│
├── components/
│   ├── ui/                          # Core UI components
│   │   ├── button/
│   │   │   ├── button.tsx           # Solid button
│   │   │   └── gradient-button.tsx  # Gradient button
│   │   ├── text-input/
│   │   │   ├── outlined.tsx         # Bordered input
│   │   │   └── filled.tsx           # Soft background input
│   │   ├── badge.tsx
│   │   ├── divider.tsx
│   │   ├── filter-tab.tsx
│   │   └── spacer.tsx
│   │
│   └── demos/                       # Component demos
│       ├── button.tsx
│       ├── badge.tsx
│       ├── divider.tsx
│       ├── filter-tab.tsx
│       ├── login.tsx
│       ├── spacer.tsx
│       └── demo-container.tsx
│
└── screens/
    └── login/
        └── login-screen.tsx         # Login implementation
```

## Project Structure

- `components/ui/` - Main UI components
  - `button.tsx` - Button component
  - `input.tsx` - Input component
  - `spacer.tsx` - Spacer component
  - `divider.tsx` - Divider component
  - `badge.tsx` - Badge component
  - `tabs.tsx` - Tabs component
- `components/demos/` - Example usage
  - `ButtonDemo.tsx` - Button examples
  - `InputDemo.tsx` - Input examples
  - `SpacerDemo.tsx` - Spacer examples
  - `DividerDemo.tsx` - Divider examples
  - `BadgeDemo.tsx` - Badge examples
  - `TabsDemo.tsx` - Tabs examples

## Features

- Built for React Native
- Easy to customize
- Consistent design
- Production ready
- Clean code
- Well documented

## Need Help?

Check the demos/ folder for examples of each component. Each demo file shows how to use the component with different props and settings.

Did it help? show some love on [LinkedIn!](https://www.linkedin.com/in/abdulbasitprofile/)

## License

Open source - use freely in your projects!
