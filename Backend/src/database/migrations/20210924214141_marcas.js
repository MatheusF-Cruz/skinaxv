exports.up = function (knex) {
    return knex.schema.createTable('marcas', (table) => {
        table.increments('id');
        table.string('nome').notNullable();
        table.timestamps(true,true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('marcas');
};

