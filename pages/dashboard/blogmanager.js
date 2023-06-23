import React from "react";
import BlogManager from "../../components/dashboard/blogManager";
import Head from "next/head";

export default function blogmanager() {
  return (
    <div>
      <Head>
        <title>Blog Manager</title>
      </Head>
      <BlogManager />
    </div>
  );
}
