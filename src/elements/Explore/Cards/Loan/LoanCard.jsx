import React from "react";
import styled from "styled-components";
import CardInfo from "./CardInfo";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { Link } from "react-router-dom";
import CardMedia from "@elements/Explore/Cards/Default/CardMedia";
import Deadline from "@elements/Explore/Cards/Default/Deadline";
import { format } from "date-fns";
import Loader from "../Default/Loader";

const Wrapper = styled(m.div)`
	position: relative;
	display: grid;
	grid-template-rows: 2fr 1fr;
	border: 0.125rem solid var(--app-container-bg-primary);
	border-radius: 0.375rem;
	/* overflow:hidden; */
	min-width: 16rem;
	aspect-ratio: calc(2 / 3);
	cursor: pointer;
	user-select: none;
	text-decoration: none;
	color: var(--app-text);
`;

const LinkWrapper = styled(Link)`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 0;
`;

const DeadlineContainer = styled.div`
	position: absolute;
	z-index: 3;
	top: 0;
	left: 50%;
	margin-top: 0.5rem;
	transform: translateX(-50%);
`;

const LoanCard = ({ data, isLoading }) => {
	// loan cards
	const lenderExists = Number(data.loan?.lender?.address) !== 0;
	const formattedDeadline =
		data.loan &&
		format(
			new Date(data.loan?.deadline * 1000),
			"EEEE, LLLL d, uuuu h:mm a"
		);
	return (
		<LazyMotion features={domAnimation}>
			<Wrapper
				whileTap={{
					x: 0,
					y: 0,
					scale: 0.99,
				}}
			>
				{lenderExists && (
					<DeadlineContainer title={`Deadline: ${formattedDeadline}`}>
						<Deadline loan time={data.loan?.deadline} />
					</DeadlineContainer>
				)}
				<CardMedia
					to={`/collectible/${data.positionId}`}
					meta={data.meta}
					deadline={data.loan?.deadline}
				/>
				<LinkWrapper
					to={`/collectible/${data.positionId}`}
				></LinkWrapper>
				{isLoading ? (
					<Loader />
				) : (
					<CardInfo data={data} lenderExists={lenderExists} />
				)}
			</Wrapper>
		</LazyMotion>
	);
};

export default LoanCard;
