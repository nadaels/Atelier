import "./App.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "./utils/styles/theme";
import Dashboard from "./MainView/5-panels/Dashboard";
import TaskList from "./TaskList";   // ← ligne ajoutée

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Dashboard />
            <TaskList />             {/* ← ligne ajoutée */}
        </ThemeProvider>
    );
}

export default App;
// Test protection branch
