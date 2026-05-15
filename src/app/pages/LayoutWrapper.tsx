import { Outlet } from "react-router";
import Layout from "../components/Layout";

export default function LayoutWrapper() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
