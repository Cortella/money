import { GlobalStyle } from "./assets/styles/global";
import { DashBoard } from "./components/Dashboard";

import { Header } from "./components/Header";
import { TransactionsTable } from "./components/TransactionsTable";


export function App() {
  return (
    <>
      <Header />
      <DashBoard />
      <TransactionsTable />
      <GlobalStyle />
    </>
  );
}
