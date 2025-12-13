"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
	theme: Theme;
	toggleTheme: () => void;
	setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [theme, setThemeState] = useState<Theme>("dark");

	useEffect(() => {
		const storedTheme = localStorage.getItem("theme") as Theme | null;

		const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
			.matches
			? "dark"
			: "light";

		const initialTheme = storedTheme ?? systemTheme;

		setThemeState(initialTheme);
		applyTheme(initialTheme);
	}, []);

	const applyTheme = (newTheme: Theme) => {
		document.documentElement.classList.toggle("dark", newTheme === "dark");
	};

	const setTheme = (newTheme: Theme) => {
		setThemeState(newTheme);
		applyTheme(newTheme);
		localStorage.setItem("theme", newTheme);
	};

	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
}
