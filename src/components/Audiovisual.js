import React from "react";

export const Audiovisual = () => {
	return (
		<div className="audiovisual__container" id="audiovisual">
			<h1>Contenido Digital</h1>
			<div className="audiovisual__wrap">
				<div className="audiovisual__div">
					<h2>Música</h2>
					<p>
						Me encanta la música y la produción de audio, echa un vistazo a mi obra
						electrónica en Youtube, SoundCloud o Spotify
					</p>
					<div>
						<a href="https://soundcloud.com/vristok" target="_blank" rel="noreferrer">
							{" "}
							<i className="fab fa-soundcloud audiovisual__ico"></i>
						</a>
						<a
							href="https://open.spotify.com/artist/7GnrjdMqD8VJxK1CMOgh7L?si=XztLl4RdS3mkXhFegRe8hQ"
							target="_blank"
							rel="noreferrer"
						>
							{" "}
							<i className="fab fa-spotify audiovisual__ico"></i>
						</a>
						<a
							href="https://www.youtube.com/channel/UCG3WiwpnAoIJ9Zr7vrcvjGQ/videos"
							target="_blank"
							rel="noreferrer"
						>
							{" "}
							<i className="fab fa-youtube-square audiovisual__ico"></i>
						</a>
					</div>
				</div>
				<div className="audiovisual__div">
					<h2>Directos</h2>
					<p>
						Conóceme mejor en uno de mis directos en Twitch.tv
					</p>
					<a href="https://www.twitch.tv/vristok" target="_blank" rel="noreferrer">
						<i className="fab fa-twitch audiovisual__ico"></i>
					</a>
				</div>
				<div className="audiovisual__div">
					<h2>Video</h2>
					<p>
						¿Te gusta el mundo del gaming? ¡Visita mi canal de youtube!
					</p>
					<a
						href="https://www.youtube.com/channel/UC-ysJS9-nifzJRx6jAgZENA"
						target="_blank"
						rel="noreferrer"
					>
						<i className="fab fa-youtube audiovisual__ico"></i>
					</a>
				</div>
			</div>
		</div>
	);
};
