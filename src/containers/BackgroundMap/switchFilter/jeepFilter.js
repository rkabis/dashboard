export default (
	feature,
	filterValue
) => {
	switch(filterValue) {
		case '':
			return true
		default:
			return (filterValue === feature.properties.routeName ? true : false)
	}
}