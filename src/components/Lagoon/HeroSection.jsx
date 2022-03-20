import { respondTo } from "@styles/styledMediaQuery";
import React from "react";
import styled, { css } from "styled-components";
import DesignSection from "./DesignSection";
import { LazyMotion, m, domAnimation } from "framer-motion";
import SimpleBarReact from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import useIsTabletOrMobile from "@utils/useIsTabletOMobile";
import { useHistory } from "react-router-dom";

const imgDim = "13rem";

const Wrapper = styled.div`
	padding: 0 6rem;
	min-height: 70vh;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	${respondTo.md`
		padding: 0;
		h1.heading{
			padding-left: 2rem;
		}
	`}
`;

const Heading = styled.h1`
	font-size: 2rem;
	font-weight: 900;
	span {
		vertical-align: top;
		padding: 0.125rem 0.5rem;
		border-radius: 1000rem;
		background: linear-gradient(45deg, #0d68d8, #0bbafb);
		font-size: 0.675rem;
		margin-left: 1rem;
		user-select: none;
		cursor: default;
	}
`;

const ContentSection = styled.div`
	position: relative;
	z-index: 4;
`;

const cardNonFeatured = css`
	background: linear-gradient(
			180deg,
			rgba(0, 0, 0, 0.75) 0%,
			rgba(140, 140, 140, 0) 100%
		),
		url(${props => props.img});
`;

const cardFeatured = css`
	background: linear-gradient(
			0deg,
			rgba(132, 32, 28, 0.65),
			rgba(15, 71, 135, 0.65)
		),
		url(${props => props.img});
`;

const featuredHoverText = css`
	&:after {
		opacity: 0;
		transform: translateY(100%);
		content: attr(data-key);
		position: absolute;
		bottom: 0;
		right: 0;
		padding: 0.25rem 0.75rem;
		font-weight: 900;
		background: linear-gradient(45deg, #fc466b, #3f5efb);
		text-transform: uppercase;
		font-size: 0.75rem;
		box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
			rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
		border-radius: 1000rem;
		margin: 0.5rem;
		transition: transform 0.175s ease 0.0875s, opacity 0.175s ease 0.0875s;
	}
	&:hover {
		&:after {
			opacity: 1;
			transform: translateY(0);
		}
	}
`;

const Card = styled(m.div)`
	${props => (props.featured ? cardFeatured : cardNonFeatured)};
	position: relative;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	min-height: ${imgDim};
	height: ${imgDim};
	min-width: ${imgDim};
	width: ${imgDim};
	border-radius: 1rem;
	padding: 1rem;
	cursor: pointer;
	text-align: left;
	overflow: hidden;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
		rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
	& * {
		cursor: pointer;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		user-select: none;
	}
	h1 {
		font-weight: 900;
		font-size: 2rem;
	}
	${props => props.featured && featuredHoverText}
	${respondTo.xs`
		width: 100%;
		aspect-ratio:1;
	`}
`;

const FeaturedSectionContainer = styled.div`
	border-radius: 1rem;
	padding-top: 1rem;
	div.featured-section-heading {
		/* position: relative;
		font-size:1.25rem;
		font-weight: 600;
		padding: 0;
		border-radius: 0.25rem;
		width: fit-content;
		height: fit-content;
		cursor: normal;
		color: var(--app-container-text-primary); */
		min-height: 100%;
		width: 0.25rem;
		background: linear-gradient(180deg, #ff931f, #ffaa33);
		border-radius: 1000rem;
		margin-left: 0;
	}
	${respondTo.md`
		display: flex;
		flex-direction: column;
		padding: 0 2rem;
		h1.featured-section-heading{
			margin-left: 0;
			font-size:1rem;
			padding: 0.125rem 0.75rem;
		}
	`}
`;

const CardsContainer = styled.div`
	display: flex;
	gap: 1rem;
	padding: 1rem 0;
	${respondTo.md`
		flex-direction: column;
		margin: 0 1rem;
	`}
`;

const SimpleBarContainer = styled(SimpleBarReact)`
	overflow-x: auto;
	width: 75%;
	${respondTo.md`
		width: 100%;
	`}
`;

const FeaturedCardsContainer = styled(CardsContainer)`
	position: relative;
	padding-right: 1rem;
	margin-right: 1rem;
	width: 100%;
	${respondTo.md`
		padding-right: 2rem;
	`}/* border-right: 0.1rem solid var(--app-container-bg-primary); */
`;

const CardsWrapper = styled.div``;

const RegularSectionHeading = styled.h2`
	font-size: 1rem;
	font-weight: 900;
	margin-top: 0.5rem;
	color: var(--app-container-text-primary);
	${respondTo.md`
		font-size: 1.5rem;
		padding: 0.75rem 1rem 0.25rem;
	`}
`;

const RegularSection = () => {
	const isTabletOrMobile = useIsTabletOrMobile();
	const history = useHistory();
	const lagoonList = [
		{
			name: "Ink Sacs",
			author: "SQWID",
			link: "/sac/1",
			img: "https://unsplash.it/300/300?image=13",
			featured: true,
		},
		{
			name: "Ink Sacs",
			author: "SQWID",
			link: "/sac/2",
			img: "https://unsplash.it/300/300?image=10",
			featured: false,
		},
		{
			name: "Bink Bacs",
			author: "Boidushya",
			link: "/sac/3",
			img: "https://unsplash.it/300/300?image=11",
			featured: false,
		},
		{
			name: "Link Lacs",
			author: "Andi",
			link: "/sac/3",
			img: "https://unsplash.it/300/300?image=12",
			featured: false,
		},
	];
	return (
		<FeaturedSectionContainer>
			<LazyMotion features={domAnimation}>
				<CardsWrapper>
					{isTabletOrMobile && (
						<RegularSectionHeading>Featured</RegularSectionHeading>
					)}
					<SimpleBarContainer>
						<FeaturedCardsContainer>
							{lagoonList
								?.filter(item => item.featured)
								?.map((item, index) => (
									<Card
										key={index}
										img={item.img}
										featured={item.featured}
										whileHover={{
											x: 0,
											y: -10,
											scale: 1.01,
										}}
										data-key={item.featured && `featured`}
										onClick={() => history.push(item.link)}
									>
										<label title={item.name}>
											<h1>{item.name}</h1>
										</label>
										<label title={item.author}>
											<p>by {item.author}</p>
										</label>
									</Card>
								))}
						</FeaturedCardsContainer>
					</SimpleBarContainer>
					<RegularSectionHeading>
						Other Projects
					</RegularSectionHeading>
					<SimpleBarContainer>
						<CardsContainer>
							{lagoonList
								?.filter(item => !item.featured)
								?.map((item, index) => (
									<Card
										key={index}
										img={item.img}
										featured={item.featured}
										whileHover={{
											x: 0,
											y: -10,
											scale: 1.01,
										}}
										data-key={item.featured && `featured`}
										onClick={() => history.push(item.link)}
									>
										<label title={item.name}>
											<h1>{item.name}</h1>
										</label>
										<label title={item.author}>
											<p>by {item.author}</p>
										</label>
									</Card>
								))}
						</CardsContainer>
					</SimpleBarContainer>
				</CardsWrapper>
			</LazyMotion>
		</FeaturedSectionContainer>
	);
};

const HeroSection = () => {
	return (
		<Wrapper>
			<ContentSection>
				<Heading className="heading">
					Lagoon<span>BETA</span>
				</Heading>
				<RegularSection />
			</ContentSection>
			<DesignSection />
		</Wrapper>
	);
};

export default HeroSection;
