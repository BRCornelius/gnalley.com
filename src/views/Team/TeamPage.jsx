import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { isMobile, teamMembers } from '../../utils';
import './TeamPage.css';

export const TeamPage = () => {
    const [teamMember, setTeamMember] = useState(null)
    const checkTeamMember = targetMember => teamMember ? teamMember.name === targetMember.name : false;

    const history = useHistory();
    const handleClick = () => {
        history.push("/contact");
    }

    const TeamMemberDisplay = ({member, selected}) => <div className="team-member-display" onClick={() => setTeamMember(member)}>
        <img alt="member" className="team-member-image" src={member.img}/>
        <h3 className="team-member-description">{member.name}<br/><small>{member.title}</small></h3>
        {selected && teamMember.description}
    </div>

    const MobileTeamMemberDisplay = ({member}) => <div onClick={() => setTeamMember(member)}>
        <img alt="member" className="team-member-image" src={member.img}/>
        <h3 className="team-member-description">{member.name}<br/><small>{member.title}</small></h3>
        {checkTeamMember(member) && teamMember.description}
    </div>

    return <div className="single-page-container">
        {isMobile ? <>
            {teamMembers.map(member => <MobileTeamMemberDisplay member={member} />)}
        </> : <>
            {!teamMember && <div className="team-page-container">
                <div className="team-row">
                    <TeamMemberDisplay member={teamMembers[0]} />
                    <TeamMemberDisplay member={teamMembers[1]} />
                </div>
                <div className="team-row">
                    <TeamMemberDisplay member={teamMembers[2]} />
                    <TeamMemberDisplay member={teamMembers[3]} />
                </div>
                <div className="team-row">
                    <TeamMemberDisplay member={teamMembers[4]} />
                </div>
            </div>}
            {teamMember && <div className="team-page-container-selected">
                <div className="team-left-column">
                    {teamMembers.map(member => member.name === teamMember.name ? <></> : <TeamMemberDisplay member={member} />)}
                </div>
                <div className="team-right-column">
                    <TeamMemberDisplay member={teamMember} selected/>
                    <div className="team-button-container">
                        <button className="team-contact-button" onClick={handleClick}>Contact Me</button>
                    </div>
                </div>
            </div>}
        </>}
    </div>
};