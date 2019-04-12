function handleNullValues(value) {
  if (value === null) {
    return '-';
  } else {
    return value;
  }
}

export function getGolferStatsFromLeaderboardData(leaderboardData) {
  return leaderboardData.player.map(player => {
    return {
      id: player.id,
      name: `${player.first_name} ${player.last_name}`,
      position: player.pos || '-',
      total: player.topar,
      thru: handleNullValues(player.thru),
      today: handleNullValues(player.today)
    };
  });
}