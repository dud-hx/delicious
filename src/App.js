/** @format */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import * as types from "./actionTypes";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
			width: "45ch",
		},
	},
}));

function App() {
	const classes = useStyles();
	const [search, setSearch] = useState("");
	const [query, setQuery] = useState("cheese");
	const updateSearch = () => {
		setQuery(search);
		setSearch("");
	};

	let dispatch = useDispatch();
	useEffect(() => {
		dispatch({ type: types.FETCH_RECIPE_START, payload: query });
	}, [query]);

	return (
		<div>
			<h2>Recipe App</h2>
			<form className={classes.root} noValidate autoComplete="off">
				<TextField
					id="outlined-basic"
					label="Outlined"
					variant="outlined"
					type="text"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
				<Button variant="contained" color="primary" onClick={updateSearch}>
					Search
				</Button>
			</form>
		</div>
	);
}

export default App;
