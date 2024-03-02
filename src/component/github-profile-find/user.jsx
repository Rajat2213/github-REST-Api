export default function User({ user }) {
    const {
        avatar_url,
        followers,
        following,
        public_repos,
        name,
        login,
        created_at,
        company,bio
    } = user;

    const createdDate = new Date(created_at);

    return (
        <div className="user">
            <div>
                <img src={avatar_url} className="avatar" alt="User" />
                <p>
                    {bio}
                </p>
            </div>
            <div className="name-container">
                <a href={`https://github.com/${login}`}>{name || login}</a>
                <div className="profile-info">

                    <p>
                        User joined on{" "}
                        {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
                            month: "short",
                        })} ${createdDate.getFullYear()}`}
                    </p>
                </div>
                <div>
                    <p>Public Repos</p>
                    <p>{public_repos}</p>
                </div>
                <div>
                    <p>Followers</p>
                    <p>{followers}</p>
                </div>
                <div>
                    <p>Following</p>
                    <p>{following}</p>
                </div>
                <div>{
                    user.company!== null  ? <p>The user works at {company}</p> : <p>The user is not currently working with any company</p>

                }</div>
            </div>
        </div>
    );
}