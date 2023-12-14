# NextJs The React Framework for the Web

**What is NextJs ?**

Next.js is a full-stack framework built on top of React. It facilitates building server-rendered and static web applications. With Next.js, you can create server-side routes and API endpoints, handle server-side rendering (SSR), static site generation (SSG), and client-side rendering (CSR). This framework streamlines the development process, ensuring optimal performance, SEO, and user experience. The recent enhancements in Next.js, like the App Router update, align with modern React features, making it a robust choice for full-stack development.


# Exploring Rendering Methods in Next.js

---

## Server-Side Rendering (SSR)
- **Introduction**: 
  - Generates HTML on the server per request.
  - Sends a fully rendered page to the client.
- **Advantages**:
  - Ideal for SEO-critical pages.
  - Great for dynamic content.
- **Scenario**:
  - A news website with constantly updating content.

---

## Static Site Generation (SSG)
- **Introduction**:
  - Generates HTML at build time.
  - Reuses generated pages for each request.
- **Advantages**:
  - Fast load times.
  - Suited for static content.
- **Scenario**:
  - A blog or documentation site.

---

## Client-Side Rendering (CSR)
- **Introduction**:
  - Renders pages in the browser using JavaScript.
  - Initial load fetches a bare HTML file, then JS renders the content.
- **Advantages**:
  - Interactive UIs.
  - Less server load.
- **Scenario**:
  - A dynamic and interactive application like a dashboard.

---

## Incremental Static Regeneration (ISR)
- **Introduction**:
  - Updates static pages incrementally after build.
  - Combines benefits of SSR and SSG.
- **Advantages**:
  - Fresh content with optimized performance.
  - Best of both SSR and SSG worlds.
- **Scenario**:
  - An e-commerce site with frequently changing product details.


---

## Building Full Stack Applications with Next.js

- **Introduction**:
  - Create both front-end and back-end in a single project.
  - Server-side routes and API endpoints for back-end logic.
- **Advantages**:
  - Unified development experience.
  - Streamlined deployment.
- **Scenario**:
  - Building a full-fledged e-commerce site with user authentication, product listings, and a checkout process, all managed within a single Next.js project.


# Installation

**System Requirements:**

***Node.js 16.14*** or later.
macOS, Windows (including WSL), and Linux are supported.


**Automatic Installation**

We recommend starting a new Next.js app using create-next-app, which sets up everything automatically for you. To create a project, run:

```bash
npx create-next-app@latest
```

On installation, you'll see the following prompts:

```bash
What is your project named? my-app
Would you like to use TypeScript? No / Yes
Would you like to use ESLint? No / Yes
Would you like to use Tailwind CSS? No / Yes
Would you like to use `src/` directory? No / Yes
Would you like to use App Router? (recommended) No / Yes
Would you like to customize the default import alias (@/*)? No / Yes
What import alias would you like configured? @/*

```

### Roadmap 

**File Structure**
Practical Example

**pages and routing**
Practical Example

#Routing In NextJs 14

# Special File Names and Folder Naming Patterns in NextJs 14's app folder

## Reserved file names in the app folder
- `page.js`: Main entry point for each folder.
- `layout.js`: Contains the wrapping layout for pages.
- `template.js`: Similar to `layout.js` but remounts on navigation.
- `head.js`: Used to customize the page head.
- `error.js`: Used in data fetching to show intermediate states.
- `not-found.js`: Renders the error screen for a not found item.

## Special naming conventions for folders
- `[id]`: Query parameters for routing.
- `[...folder_name_here]`: Catch-all segments for varied URL mappings.
- `(folder_name_here)`: Named route groups for organizing routes without affecting the URL.

[Reference](https://www.js-craft.io/blog/next-14-special-files-and-folders-naming-conventions-in-the-app-folder/)

---

### Creating New Pages in Next.js: "About" and "Contact"

In this section, we'll go through the steps to create two new pages in our Next.js application: the "About" and "Contact" pages. These pages will be accessible through specific URLs based on their folder and file names.

#### Step 1: Creating the "About" Page

1. **Create a New Folder**: 
   - Begin by creating a new folder in your project's directory. Name this folder `about`.

2. **Add the Page File**:
   - Inside the `about` folder, create a file named `page.js`.
   - By naming the file `page.js`, we ensure that this particular route will not be served directly. Instead, it will be accessed as part of the folder structure.

#### Step 2: Creating the "Contact" Page

1. **Create Another New Folder**: 
   - Similar to the first step, create a new folder and name it `contact`.

2. **Add the Page File**:
   - Within the `contact` folder, create a file named `page.js`.
   - This setup follows the same pattern as the "About" page, where the `page.js` file defines the content and structure of the page.

#### Accessing the Pages

- **URL Structure**:
  - Once these pages are set up, you can access them through their respective URLs.
  - The URL for the "About" page will be `yourdomain.com/about`, and for the "Contact" page, it will be `yourdomain.com/contact`.

By following these steps, you'll have the "About" and "Contact" pages set up and accessible in your Next.js application. This structure showcases the flexibility and ease of routing in Next.js, allowing for intuitive and organized page creation.

--- 


### Enhancing Navigation in Next.js with Layouts and the Link Component

Next.js offers a streamlined way to manage page navigation through the use of layouts and the `Link` component. This approach simplifies navigation and enhances performance. Let's delve into how we can implement this in our application.

#### Implementing a Root Layout for Navigation

First, we introduce a Root Layout to centralize our navigation structure. This layout allows us to define our navigation links in one place, rather than managing them on each page. Here's an example of how to set it up:

```jsx
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`inter.className container mx-auto`}>
        <nav className='flex justify-between items-center'>
          <a href="/">Home</a>
          <ul className='flex space-x-2 py-2'>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
```

With this layout, our application's navigation is now centralized, simplifying the user experience.

#### Optimizing Performance with the Link Component

While the above implementation works, it has a performance drawback: each navigation link triggers a full page refresh. Next.js offers a solution with its `Link` component, which enables client-side navigation without full page reloads. This results in a smoother and faster user experience.

Here's how to refactor our navigation using the `Link` component:

```jsx
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} container mx-auto`}>
        <nav className='flex justify-between items-center'>
          <Link href="/"><a>Home</a></Link>
          <ul className='flex space-x-2 py-2'>
            <li>
              <Link href="/about"><a>About</a></Link>
            </li>
            <li>
              <Link href="/contact"><a>Contact</a></Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
```

In this refined code, the `Link` component wraps around our anchor tags, ensuring that navigation between pages is smooth and doesn't require a page reload. This approach not only improves the performance but also the overall user experience of the application.

---

### Data Fetching

The release of NextJS 14 brought about a plethora of new and impressive features, with one standout being the updated data fetching and management process. The fetch API replaced the more complicated functions, including getServerSideProps, getStaticProps, and getInitialProps.

**fetch() API**
React recently introduces support for async/await in Server Components. You can now write Server Components using standard JavaScript await syntax by defining your component as an async function and that is what turned out to be a big plus point for NextJS 14.


```js
import React from 'react';

const page = async () => {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts');
    const postData = await posts.json();

    return (
        <div>
            <h1>Posts</h1>
            {postData.map(post => (
                <h1>{post.title}</h1>
            ))}
        </div>
    );
};
export default page;
```
note the fact that you no longer need to do this on the page level, like if you did before using getStaticProps or getServerSideProps. You can do this inside any component.

**Client Components**
For now, if you need to fetch data in a Client Component, NextJS 14 recommends using a third-party library such as SWR or React Query.

**Caching Data**
Caching stores data so it doesn't need to be re-fetched from your data source on every request.

By default, Next.js automatically caches the returned values of fetch in the Data Cache on the server. This means that the data can be fetched at build time or request time, cached, and reused on each data request.

```js
// 'force-cache' is the default, and can be omitted
fetch('https://...', { cache: 'force-cache' })

```

**Revalidating Data**
Revalidation is the process of purging the Data Cache and re-fetching the latest data. This is useful when your data changes and you want to ensure you show the latest information.

Cached data can be revalidated in two ways:

**Time-based revalidation:** Automatically revalidate data after a certain amount of time has passed. This is useful for data that changes infrequently and freshness is not as critical.
**On-demand revalidation:** Manually revalidate data based on an event (e.g. form submission). On-demand revalidation can use a tag-based or path-based approach to revalidate groups of data at once. This is useful when you want to ensure the latest data is shown as soon as possible (e.g. when content from your headless CMS is updated).

**Time-based Revalidation**
To revalidate data at a timed interval, you can use the next.revalidate option of fetch to set the cache lifetime of a resource (in seconds).

```js
fetch('https://...', { next: { revalidate: 3600 } })
```

Alternatively, to revalidate all fetch requests in a route segment, you can use the Segment Config Options.

```js
export const revalidate = 3600 // revalidate at most every hour
```


### options.cache

Configure how the request should interact with Next.js Data Cache.

```javascript
fetch(`https://...`, { cache: 'force-cache' | 'no-store' })
```

- `force-cache` (default) - Next.js looks for a matching request in its Data Cache...
- `no-store` - Next.js fetches the resource from the remote server...

### options.next.revalidate

Set the cache lifetime of a resource (in seconds).

```javascript
fetch(`https://...`, { next: { revalidate: false | 0 | number } })
```

- `false` - Cache the resource indefinitely...
- `0` - Prevent the resource from being cached...
- `number` - (in seconds) Specify the resource should have a cache lifetime...

### options.next.tags

Set the cache tags of a resource.

```javascript
fetch(`https://...`, { next: { tags: ['collection'] } })
```
Data can then be revalidated on-demand using revalidateTag...


**Static Data Fetching**
fetch by default caches the data. So, even if the data from the API changes, when you refresh the page, the site doesn't update the data. This works great for sites which have static data which seldom changes. The example above demonstrates how to do this because it is the same as doing

```js
fetch("https://jsonplaceholder.typicode.com/posts", {
  cache: "force-cache",
});

```

**Dynamic Data Fetching**
You can tell the fetch API to never cache the data by changing force-cache to no-cache or no-store(both signify the same in NextJS).

```js
fetch("https://jsonplaceholder.typicode.com/posts", {
  cache: "no-cache"
});
```


Got it! In Next.js 14, with the introduction of the App Directory, the approach to handling dynamic segments has been further streamlined. Here's an explanation of what dynamic segments are in this context, along with an example that showcases their use in a Next.js application utilizing the App Directory.

### Dynamic Segments in Next.js with App Directory

### What are Dynamic Segments in Next.js with App Directory?

Dynamic segments in Next.js are parts of the URL path that are variable. They allow you to create pages that can handle a variety of paths with a single file. These segments are denoted by square brackets in the file or folder name. With the App Directory, the routing system becomes more intuitive and flexible, allowing for better organization and scalability of your Next.js applications.

### Example of a Dynamic Segment in a Next.js App Directory:

**Scenario**: Imagine you're creating a blog application where each post has a unique ID. You want a single page that can display the content for any post based on its ID.

**Structure**:
```
- app/
  - page/
    - posts/
      - [postId]/
        - page.js
```

**Explanation**:
- The `[postId]` folder represents the dynamic segment. Here, `postId` is the variable part of the URL.
- `page.js` is the actual page component that will be rendered when someone navigates to `/posts/some-post-id`.

**page.js** (Simplified Example):
```jsx
import React from 'react';

// This is a Server Component
const PostDetails = ({ params }) => {
  // The dynamic segment (postId) is directly accessible as a prop
  const { postId } = params;
  const posts = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, { cache: "no-store" });

  const postData = await posts.json();
  // Logic to fetch post details based on postId

  return (
    <div>
      <h1>Post Details</h1>
      <p>Displaying details for post ID: {postId}</p>
      {/* Render the post details */}
    </div>
  );
};

export default PostDetails;

```

**Key Points**:
- The file `[postId].js` represents a dynamic route for individual posts.
- The `PostDetails` Server Component receives `params` directly as props. `params` contains the dynamic segment values, in this case, `postId`.
- You can use `postId` to fetch and render the specific details of the post.

This pattern greatly reduces the boilerplate code and makes components more straightforward to reason about, especially when dealing with dynamic data based on URL parameters. Server Components, by handling data-fetching and rendering on the server, also potentially lead to performance improvements and reduced client-side JavaScript size.


### Catch-all Segments in NextJs for E-Commerce URL Structure

In the context of an e-commerce platform, managing routes effectively becomes crucial to ensure a smooth user navigation experience. Utilizing NextJs's catch-all segments can be highly beneficial in crafting a flexible URL strategy to manage various product hierarchies and categories.

Consider an e-commerce platform with various products, each product belonging to a category and potentially a sub-category. A potential URL structure could be:

- `/products/[category]/[subCategory]/[productId]`

#### Implementing Catch-all Segments

Using catch-all segments, we can create a routing mechanism in NextJs that dynamically handles varying URL depths in an elegant and developer-friendly manner.

##### Folder Structure:

```plaintext
/app
    /products
        /[...params]
            page.js
```


#### Intercepting Multiple URL Parameters

The catch-all segments enable us to intercept multiple URL parameters, thus providing the flexibility to manage various URL structures:

```plaintext
/products/one
/products/one/two
/products/one/two/three
```

This allows you to create a user-friendly URL structure, such as:
- `/products/electronics`
- `/products/electronics/phones`
- `/products/electronics/phones/123`


```jsx
import React from 'react';

const ProductPage = ({ params }) => {

    console.log("params", params.product);
    return (
        <div>page</div>
    );
};
export default ProductPage;
```

#### Optional Catch-all Segments

Using the optional catch-all dynamic segments, we can handle even the root path, preventing 404 errors for URLs like `/products`:

```plaintext
/app
    /products
        /[[...params]]
            page.js
```

##### Example URLs:

```plaintext
/products
/products/electronics
/products/electronics/phones
/products/electronics/phones/123
```

### Conclusion

Implementing catch-all and optional catch-all segments in NextJs allows developers to create a rich, user-friendly, and SEO-optimized URL strategy, especially beneficial in scenarios like e-commerce platforms where a hierarchical and intuitive navigation system is key to enhancing user experience and SEO.


# Introducing the route groups in NextJs 14

In this Docs, we will see how to use the NextJs route groups to set a shared layout for multiple pages in the app folder.

Let's say we have the following files in the app folder:

```plaintext
/app
    page.js -> maps to: /
    /red
        page.js -> maps to: /red
    /blue
        page.js -> maps to: /blue
    /green
        page.js -> maps to: /green
```

For the `/red` and `/blue` routes we want to set a shared [layout], but we don't want to have this layout on the `/green` route.

In order to do this we will need to use the route groups from NextJs.

A route group is created by wrapping a folder’s name in parenthesis:

```plaintext
(nameOfFolder)
```

By adding a route group we are breaking out of the [NextJs route system]. The folders written in round brackets are not included in the application routes.

So, if we will add put the `red` and `blue` folders in a folder named `(sharedLayout)`, we will still have the same routes as before:

```plaintext
/app
    page.js -> maps to: /
    (sharedLayout)
        /red
            page.js -> maps to: /red
        /blue
            page.js -> maps to: /blue
    /green
        page.js -> maps to: /green
```

We can use the route groups to better organize our code.

# Adding shared layouts for multiple pages

But, one cool thing is that we can also use route groups to share layouts between multiple pages with the same root folder. So, if we will add a `layout.js` file in the `(sharedLayout)` folder:

```plaintext
/app
    page.js
    /(sharedLayout)
        layout.js
        /red
            page.js
        /blue
            page.js
    /green
        page.js -> maps to: /green
```

Then the `/red` and `/blue` pages will have the same shared layout file:

```plaintext
/app/(sharedLayout)/layout.js
```

### Route Handlers

Route Handlers allow you to create custom request handlers for a given route using the Web Request and Response APIs.


<div style="padding: 10px; border-left: 5px solid #f39c12; background-color: #fffbcc; margin-bottom: 15px;">
    <strong>Good to Know:</strong> Route Handlers are only available inside the app directory. They are the equivalent of API Routes inside the pages directory meaning you do not need to use API Routes and Route Handlers together.
</div>

**Convention**
Route Handlers are defined in a **route.js|ts** file inside the app directory:

```js
export async function GET(request) {}
```

**Supported HTTP Methods**

The following HTTP methods are supported:**GET, POST, PUT, PATCH, DELETE, HEAD**, and **OPTIONS**. If an unsupported method is called, Next.js will return a 405 Method Not Allowed response.

**Extended NextRequest and NextResponse APIs**
In addition to supporting native Request and Response. Next.js extends them with NextRequest and NextResponse to provide convenient helpers for advanced use cases.

(Route handler Docs[https://nextjs.org/docs/app/building-your-application/routing/route-handlers])
# next-js-crash-course
