import React from 'react'

import TeamMember from '../components/TeamMember'

class Team extends React.Component {
  render() {
    return (
      <div>
        <h1>Team</h1>
        <TeamMember name="Alan" />
        <TeamMember name="Alishaan" />
        <TeamMember name="Ava" />
        <TeamMember name="Christian" />
        <TeamMember name="Emily" />
        <TeamMember name="Jack" />
        <TeamMember name="Kabir" />
        <TeamMember name="Katherine" />
        <TeamMember name="Mark" />
        <TeamMember name="Megan" />
        <TeamMember name="Vikram" />
        <TeamMember name="Will" />
      </div>
    )
  }
}

export default Team
