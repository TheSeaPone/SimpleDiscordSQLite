module.exports = async (client, member) => {

  const Discord = client.Discord;

  //sqlite
  const Database = client.Database;
  const db = client.dbsql;
  
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();
  
  if(dd<10) {
    dd = '0'+dd
  } 

  if(mm<10) {
    mm = '0'+mm
  } 

  var today = mm + '/' + dd + '/' + yyyy;
  
  db.prepare('INSERT INTO guildmember ( userid, date ) VALUES ( ?, ? )').run(member.id, today);

};
