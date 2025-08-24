# Tailwind CSS Setup in React + Vite Project

This project has been successfully configured with Tailwind CSS v4.

## What was installed:
- `tailwindcss` - The core Tailwind CSS framework
- `postcss` - CSS post-processor
- `autoprefixer` - Automatically adds vendor prefixes

## Configuration files created:
1. **`tailwind.config.js`** - Tailwind configuration with content paths for React components
2. **`postcss.config.js`** - PostCSS configuration to enable Tailwind and Autoprefixer
3. **`src/index.css`** - Updated with Tailwind directives

## Tailwind directives added to CSS:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## How to use:
1. **Start the development server**: `npm run dev`
2. **Use Tailwind classes** in your JSX components like:
   - `className="bg-blue-500 text-white p-4 rounded-lg"`
   - `className="flex items-center justify-center min-h-screen"`

## Example classes used in App.jsx:
- **Layout**: `min-h-screen`, `flex`, `flex-col`, `items-center`, `justify-center`
- **Spacing**: `p-8`, `mb-8`, `mt-8`, `space-x-8`
- **Colors**: `bg-gradient-to-br`, `from-blue-50`, `to-indigo-100`, `text-gray-800`
- **Typography**: `text-5xl`, `font-bold`, `text-center`
- **Components**: `bg-white`, `rounded-lg`, `shadow-lg`
- **Hover effects**: `hover:scale-110`, `hover:bg-blue-600`
- **Transitions**: `transition-transform`, `transition-colors`, `duration-200`

## Development server:
The server is running on `http://localhost:5173` - you can view your styled application there!

## Troubleshooting:
If you see a white background instead of the gradient, or if some Tailwind classes aren't working:
1. Make sure you're using Tailwind CSS v3 (not v4)
2. Check that `postcss.config.js` uses `tailwindcss: {}` (not `@tailwindcss/postcss`)
3. Ensure `tailwind.config.js` uses `module.exports` syntax
4. Clear your browser cache and refresh the page

## Building for production:
Run `npm run build` to create a production build with all Tailwind styles properly purged and optimized.
