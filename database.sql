-- Run below query to create database named as testing_database
CREATE DATABASE testing_database
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_India.1252'
    LC_CTYPE = 'English_India.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;




-- Run below query to create table named as salesdata
CREATE TABLE public.salesdata
(
    region character varying COLLATE pg_catalog."default",
    country character varying COLLATE pg_catalog."default",
    item_type character varying COLLATE pg_catalog."default",
    sales_channel character varying COLLATE pg_catalog."default",
    order_priority character varying COLLATE pg_catalog."default",
    order_date date,
    order_id double precision,
    ship_date date,
    units_sold double precision,
    unit_price double precision,
    unit_cost double precision,
    total_revenue double precision,
    total_cost double precision,
    total_profit double precision
)

TABLESPACE pg_default;

ALTER TABLE public.salesdata
    OWNER to postgres; 



-- code ends here