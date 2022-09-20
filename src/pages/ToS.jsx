import Wrapper from "@components/Default/Wrapper";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
	width: 70vw;
	margin: 0 auto;
	ul {
		list-style-position: inside;
	}
	h1,
	h2 {
		margin: 0.75rem 0;
	}
	h1 {
		font-size: 2rem;
		font-weight: 800;
		margin-bottom: 2rem;
	}
	p,
	ul {
		color: var(--app-container-text-primary-hover);
	}
	a {
		text-decoration: none;
		transition: color 0.1s ease;
		&:link {
			color: var(--app-theme-primary);
		}
		&:hover {
			color: var(--app-theme-primary-disabled);
		}
		&:visited {
			color: var(--app-text);
		}
	}
`;

const ToS = () => {
	return (
		<Wrapper>
			<Container>
				<h1>Terms and Conditions of Use</h1>

				<h2>1. Terms</h2>

				<p>
					By accessing this Website, accessible from
					https://glowlab.xyz, you are agreeing to be bound by these
					Website Terms and Conditions of Use and agree that you are
					responsible for the agreement with any applicable local
					laws. If you disagree with any of these terms, you are
					prohibited from accessing this site. The materials contained
					in this Website are protected by copyright and trade mark
					law.
				</p>

				<h2>2. Use License</h2>

				<p>
					Permission is granted to temporarily download one copy of
					the materials on Glowlab's Website for personal,
					non-commercial transitory viewing only. This is the grant of
					a license, not a transfer of title, and under this license
					you may not:
				</p>

				<ul>
					<li>modify or copy the materials;</li>
					<li>
						use the materials for any commercial purpose or for any
						public display;
					</li>
					<li>
						attempt to reverse engineer any software contained on
						Glowlab's Website;
					</li>
					<li>
						remove any copyright or other proprietary notations from
						the materials; or
					</li>
					<li>
						transferring the materials to another person or "mirror"
						the materials on any other server.
					</li>
				</ul>

				<p>
					This will let Glowlab to terminate upon violations of any of
					these restrictions. Upon termination, your viewing right
					will also be terminated and you should destroy any
					downloaded materials in your possession whether it is
					printed or electronic format.
				</p>

				<h2>3. Disclaimer of warranties and Limitation of liability</h2>

				<p>
					This website is provided by the authors "as is" and any
					express or implied warranties, including, but not limited
					to, the implied warranties of merchantability and fitness
					for a particular purpose are disclaimed. In no event shall
					the authors be liable for any direct, indirect, incidental,
					special, exemplary, or consequential damages (including, but
					not limited to, procurement of substitute goods or services;
					loss of use, data, or profits; or business interruption)
					however caused and on any theory of liability, whether in
					contract, strict liability, or tort (including negligence or
					otherwise) arising in any way out of the use of this
					website, even if advised of the possibility of such damage.
				</p>

				<h2>4. Limitations</h2>

				<p>
					glowlab.xyz or its suppliers will not be hold accountable
					for any damages that will arise with the use or inability to
					use the materials on Glowlab’s Website, even if Glowlab or
					an authorize representative of this Website has been
					notified, orally or written, of the possibility of such
					damage. Some jurisdiction does not allow limitations on
					implied warranties or limitations of liability for
					incidental damages, these limitations may not apply to you.
				</p>

				<h2>5. Revisions and Errata</h2>

				<p>
					The materials appearing on Glowlab’s Website may include
					technical, typographical, or photographic errors. Glowlab
					will not promise that any of the materials in this Website
					are accurate, complete, or current. Glowlab may change the
					materials contained on its Website at any time without
					notice. Glowlab does not make any commitment to update the
					materials.
				</p>

				<h2>6. Links</h2>

				<p>
					glowlab.xyz has not reviewed all of the sites linked to its
					Website and is not responsible for the contents of any such
					linked site. The presence of any link does not imply
					endorsement by Glowlab of the site. The use of any linked
					website is at the user’s own risk.
				</p>

				<h2>7. Site Terms of Use Modifications</h2>

				<p>
					glowlab.xyz may revise these Terms of Use for its Website at
					any time without prior notice. By using this Website, you
					are agreeing to be bound by the current version of these
					Terms and Conditions of Use.
				</p>

				<h2>8. Your Privacy</h2>

				<p>
					Please read our{" "}
					<a href="/privacy-policy">Privacy Policy.</a>
				</p>

				<h2>9. Copyright Complaints</h2>

				<p>
					Glowlab respects the intellectual property of others. If you
					believe that your work has been copied in a way that
					constitutes copyright infringement, please{" "}
					<a href="mailto:contact@glowlab.xyz">email us</a>
				</p>
			</Container>
		</Wrapper>
	);
};

export default ToS;
