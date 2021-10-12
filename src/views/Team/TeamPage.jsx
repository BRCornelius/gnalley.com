import React, { useState } from 'react';
import './TeamPage.css';

const teamMembers = [{
    name:'George John Nalley, Jr.',
    title: 'Founder & Managing Member',
    description: <><p>George graduated from the University of Notre Dame in 1976 with an undergraduate degree in Political Science. After working for several years in the construction industry, he obtained his Juris Doctor from Louisiana State University School of Law in 1981. After graduating from law school, George clerked for the Honorable Lansing L. Mitchell, United States Senior District Judge for the Eastern District of Louisiana. Prior to founding his own firm, George was also a member of a prominent New Orleans law firm where he specialized in casualty litigation and maritime law.</p><p>George is licensed to practice in the states of Louisiana and Texas. He is admitted to practice before the United States Court of Appeals for the Fifth Circuit, all of the United States District Courts in Louisiana and Texas, all of the state courts in Louisiana and Texas, and is a member of the Louisiana and Texas Bar Associations.</p></>,
    email: '',
    img: 'http://www.gnalley.com/wp-content/uploads/2014/09/GeorgeDSC_4698.jpg'
}, {
    name:'Dona Jeanne Dew',
    title: 'Member',
    description: <><p>Dona earned her B.A. degree in English Literature from Boston University in 1971. She was awarded her Juris Doctor degree from Loyola University School of Law, New Orleans, with Law Review honors, in 1982. Dona initially practiced with and became a partner of a major New Orleans law firm where her practice centered around labor law, civil litigation, and oil and gas. In 1996, Dona joined Nalley and Dew and her practice currently involves the litigation of labor and employment law issues as well as casualty litigation, maritime disputes, and the litigation of business disputes. She also has extensive experience handling much of the firm’s appellate practice.</p><p>Dona is licensed to practice in the states of Louisiana, Florida, and Texas. She is admitted to practice before the U.S. Supreme Court, the United States Court of Appeals for the Fifth Circuit, all of the United States District Courts in Louisiana, and all state courts in Louisiana, Texas, and Florida and is a member of the Louisiana, Florida, and Texas Bar Associations. Before entering the field of law, Dona worked in retailing and employee management as the proprietor of a small business and as a buyer for a major New Orleans department store.</p></>,
    email: '',
    img: 'http://www.gnalley.com/wp-content/uploads/2014/09/DSC_2585.jpg'
}, {
    name:'Andrew James Miner',
    title: 'Associate',
    description: <><p>Andrew is a Louisiana transplant who was raised in Michigan. He received his Bachelor’s degree in History from Miami University of Ohio prior to coming to New Orleans, where he received his Juris Doctor from Tulane University in 2012, with a certificate in Maritime Law. While at Tulane, Andrew was also a member of the Environmental Law Clinic.</p><p>After becoming licensed to practice in Louisiana in 2012, Andrew worked extensively with the BP Oil Spill Settlement. Since joining Nalley and Dew in 2014, he has gained experience in general civil and maritime litigation and federal and state workers’ compensation cases. Andrew is admitted to practice before the United States Supreme Court, the United States Court of Appeals for the Fifth Circuit, all of the United States District Courts in Louisiana and Mississippi, and all Louisiana and Mississippi state courts.</p></>,
    email: '',
    img: 'http://www.gnalley.com/wp-content/uploads/2014/09/DSC_2415.jpg'
}, {
    name:'Cindy T. Prange',
    title: 'Paralegal',
    description: <></>,
    email: '',
    img: 'http://www.gnalley.com/wp-content/uploads/2014/09/DSC_2350.jpg'
}, {
    name:'Cheryl S. Lawrence',
    title: 'Paralegal',
    description: <></>,
    email: '',
    img: 'http://www.gnalley.com/wp-content/uploads/2014/08/DSC_2488.jpg'
}]


export const TeamPage = () => {
    const [teamMember, setTeamMember] = useState(null)

    const TeamMemberDisplay = ({teamMember, selected}) => <div className="team-member-display" onClick={() => setTeamMember(teamMember)}>
        <img alt="member" className="team-member-image" src={teamMember.img}/>
        <h3 className="team-member-description">{teamMember.name}<br/><small>{teamMember.title}</small></h3>
        {selected && teamMember.description}
    </div>

    return <div className="single-page-container">
        {!teamMember && <div className="team-page-container">
            <div className="team-row">
                <TeamMemberDisplay teamMember={teamMembers[0]} />
                <TeamMemberDisplay teamMember={teamMembers[1]} />
            </div>
            <div className="team-row">
                <TeamMemberDisplay teamMember={teamMembers[2]} />
                <TeamMemberDisplay teamMember={teamMembers[3]} />
            </div>
            <div className="team-row">
                <TeamMemberDisplay teamMember={teamMembers[4]} />
            </div>
        </div>}
        {teamMember && <div className="team-page-container-selected">
            <div className="team-left-column">
                {teamMembers.map(member => member.name === teamMember.name ? <></> : <TeamMemberDisplay teamMember={member} />)}
            </div>
            <div className="team-right-column">
                <TeamMemberDisplay teamMember={teamMember} selected/>
            </div>
        </div>}
    </div>
};