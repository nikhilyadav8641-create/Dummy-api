# Social Media App

A simple social media–style Media built with **React** and **Bootstrap**. Users can browse a list of posts or switch to a form to create a new post. Posts can also be deleted directly from the Media.

## Features

- 🏠 **Home tab** — view a list of all posts, each showing title, body, hashtags, and reaction count
- ✍️ **Create Post tab** — form to add a new post with username, title, body, reaction count, and hashtags
- 🗑️ **Delete post** — remove any post from the Media with one click
- 🧭 **Sidebar navigation** — switch between "Home" and "Create Post" views
- 🎨 Styled with Bootstrap components (header, sidebar, footer, forms, cards, alerts, badges)

## Tech Stack

- [React](https://react.dev/) (functional components + hooks)
- [Vite](https://vitejs.dev/) as the build tool / dev server
- [Bootstrap](https://getbootstrap.com/) for UI styling
- [react-icons](https://react-icons.github.io/react-icons/) for icons (delete icon)
- React Context API + `useReducer` for state management (no external state library)

## Project Structure

```
├── App.jsx                # Root component; toggles between Home and Create Post views
├── App.css                # Global/custom styles
├── main.jsx                # React app entry point
├── components/
│   ├── Header.jsx          # Top navigation bar
│   ├── Footer.jsx          # Page footer
│   ├── SideBar.jsx         # Sidebar with tab navigation
│   ├── PostList.jsx        # Renders the list of posts
│   ├── Post.jsx             # Single post card with delete action
│   └── CreatePost.jsx       # Form for submitting a new post
└── store/
    └── post-list-store.jsx  # Context provider + reducer for post state (add/delete)
```

> Note: Import paths in the components (e.g. `../store/post-list-store`, `./components/Header`) assume the files above live inside a `src/` folder with `components/` and `store/` subfolders. Adjust paths if your folder layout differs.

## State Management

Post data is managed through a React Context (`Postlist`) combined with `useReducer`:

- **`postList`** — array of post objects (`id`, `title`, `body`, `reactions`, `userId`, `tags`)
- **`addPost(userId, postTitle, postBody, postReactions, tags)`** — dispatches an `ADD_POST` action, prepending a new post to the list
- **`deletePost(postId)`** — dispatches a `DELETE_POST` action, filtering the post out by id

The app ships with two sample posts pre-loaded in `DEFAULT_POST_LIST` so the Media isn't empty on first load.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or later recommended)
- npm (or yarn/pnpm)

### Installation

```bash
# Install dependencies
npm install

# Install required packages if not already present
npm install bootstrap react-icons
```

### Run the dev server

```bash
npm run dev
```

Then open the printed local URL (typically `http://localhost:5173`) in your browser.

### Build for production

```bash
npm run build
```

## Usage

1. Use the **Sidebar** to switch between **Home** and **Create Post**.
2. On **Home**, browse existing posts. Click the red delete badge on a post's title to remove it.
3. On **Create Post**, fill in:
   - Username
   - Title
   - Post content
   - Number of reactions
   - Hashtags (space-separated)
4. Click **Post** to add it to the Media — it will appear at the top of the Home list.

## Known Limitations / Possible Improvements

- No persistence — posts reset on page refresh since state is only kept in memory.
- No form validation (e.g. empty fields, non-numeric reactions) before submitting.
- The "Check me out" checkbox in `CreatePost.jsx` is currently unused.
- Sidebar navigation items are clickable `<li>`/`<a href="#">` elements rather than buttons/router links.
- Hashtag input splits only on spaces; commas or other separators aren't supported.

## License

This project is provided as-is for learning/demo purposes.