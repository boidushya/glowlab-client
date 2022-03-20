import { respondTo } from "@styles/styledMediaQuery";
// import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
// import RecentlyListed from "./RecentlyListed";
import { fetchMarketplaceItems } from "@utils/marketplace";
import OnSaleSection from "@elements/Explore/Sections/OnSaleSection";
import AuctionSection from "@elements/Explore/Sections/AuctionSection";
import RaffleSection from "@elements/Explore/Sections/RaffleSection";
import LoansSection from "@elements/Explore/Sections/LoansSection";
import useOnScreen from "@utils/useOnScreen";

// changed the min height ot 20 instead of 70 to stop the quirky thing
const Container = styled.div`
	padding: 0 6rem;
	min-height: 20vh;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	${respondTo.md`
		padding: 0;
		h1{
			padding-left: 3rem;
		}
	`}
`;

const Wrapper = styled.div`
	padding: 0 12rem;
	${respondTo.md`
		padding: 0;
	`}
`;

const Section = styled.section`
	width: 100%;
	margin: 4rem 0;
`;

const Explore = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [onSale, setOnSale] = useState([]);
	const [auctions, setAuctions] = useState([]);
	const [raffles, setRaffles] = useState([]);
	const [loans, setLoans] = useState([]);
	const containerRef = useRef();
	const { isVisible } = useOnScreen(containerRef);

	const fetchData = async () => {
		// console.log("sending request")
		const { sale, auction, raffle, loan } = await fetchMarketplaceItems();
		setOnSale(sale);
		setAuctions(auction);
		setRaffles(raffle);
		setLoans(loan);
		setIsLoading(false);
	};

	useEffect(() => {
		isVisible && onSale.length === 0 && fetchData();
		//eslint-disable-next-line
	}, [isVisible]);

	return (
		<Section id="explore">
			<Wrapper>
				<Container id="explore" ref={containerRef}>
					{!isLoading && (
						<>
							<OnSaleSection items={onSale} />
							<AuctionSection items={auctions} />
							<RaffleSection items={raffles} />
							<LoansSection items={loans} />
						</>
					)}
				</Container>
			</Wrapper>
		</Section>
	);
};

export default Explore;
