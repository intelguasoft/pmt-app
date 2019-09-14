# PMT APP

Si queres agregar un usuario podes hacerlo con el siguiente sql en la consulta habiendo seleccionado la base de datos del backend:

```sql
INSERT INTO users
    (	role_id,
        oficial_id,
        date_birthday,
        first_name,
        last_name,
        gender,
        nit,
        dpi,
        email,
        password)
    VALUES
    (	'1',
        '4324234242',
        '2000-09-14',
        'Edgar',
        'Chub',
        'Male',
        'fasfafas',
        '1111111111111',
        'edgar@chub.com',
        '$2y$10$Po3FVJed0Ijhkr7GZmBUYOmA8YC63opYAU70UVT3M9kH28.6NkR1S');
```

El hash del password es `123456`