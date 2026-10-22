const { DataTypes } = require("sequelize");
const db = require("../models");

async function migrate() {
  try {
    const queryInterface = db.sequelize.getQueryInterface();
    const userTable = db.User.getTableName();
    const columns = await queryInterface.describeTable(userTable);

    if (!columns.hasClaimedStarterPack) {
      await queryInterface.addColumn(userTable, "hasClaimedStarterPack", {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      });
    }

    // Preserve eligibility for empty accounts, and exclude established teams.
    // This is safe to rerun: it never resets an existing claim.
    const quote = (name) => queryInterface.queryGenerator.quoteIdentifier(name);
    const users = queryInterface.queryGenerator.quoteTable(userTable);
    const ownership = queryInterface.queryGenerator.quoteTable(db.UserPlayer.getTableName());
    await db.sequelize.query(
      `UPDATE ${users} SET ${quote("hasClaimedStarterPack")} = true ` +
        `WHERE ${quote("id")} IN (SELECT ${quote("userId")} FROM ${ownership})`,
    );

    console.log("Starter pack migration complete.");
  } catch (error) {
    console.error("Starter pack migration failed:", error.message);
    process.exitCode = 1;
  } finally {
    await db.sequelize.close();
  }
}

migrate();
