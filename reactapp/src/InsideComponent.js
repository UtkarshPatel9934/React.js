function Outer()
{
	function Inside()
	{
		return (
			<div>
				<h4>Inside functional component</h4>
			</div>
		)
	}

	return (
		<div>
			<h1>First Function</h1>
			<Inside></Inside>
		</div>
	)
}

export default Outer;