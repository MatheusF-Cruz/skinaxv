exports.up = function (knex) {
    return knex.schema.createTable('carros', (table) => {
        table.increments('id');
        table.integer('marca_id').unsigned().notNullable();
        table.string('modelo').notNullable();
        table.string('versao').notNullable();
        table.string('combustivel').notNullable();
        table.string('km').notNullable();
        table.string('cor').notNullable();
        table.string('valor').notNullable();
        table.string('local').defaultTo('Itaquaquecetuba/SP')
        table.string('ano').notNullable()
        table.timestamps(true,true);


        table.foreign('marca_id').references('id').inTable('marcas');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('carros');
};

