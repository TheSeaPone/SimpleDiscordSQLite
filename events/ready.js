module.exports = (client, message) => {
  const Discord = client.Discord;
  //sqlite
  const Database = client.Database;
  const dbsql = client.dbsql;

  db.prepare('CREATE TABLE IF NOT EXISTS guildmember ( userid TEXT, data TEXT )').run();

  client.user.setActivity(`${client.config.game.activity}`, { type: `${client.config.game.status}` });
};
