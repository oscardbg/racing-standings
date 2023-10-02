import { useGlobalContext } from "../context";

const Standings = ({ num, people, locations, type }) => {
	const { totalByRaces } = useGlobalContext();

	return (
		<>
			<ul className="driver-list">
				<li className="first-row">
					<p>Names</p>
					<div className="scores">
						<span>Total</span>
						{locations.map((loc, i) => (
							<span
								key={loc.id}
								onClick={() => totalByRaces(i + 1, type)}
								title={loc.race + "\n" + loc.date}
							>
								<img src={loc.flag} alt="" />
							</span>
						))}
					</div>
				</li>
				{people.map((person) => (
					<li key={person.id}>
						<p>{person.name}</p>
						<div className="scores">
							<span>{person.total}</span>
							{[...Array(num)].map((_, i) => (
								<span key={i}>{person.scores[i]}</span>
							))}
						</div>
					</li>
				))}
			</ul>
		</>
	);
};

export default Standings;
