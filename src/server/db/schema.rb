# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_05_20_234429) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "availabilities", force: :cascade do |t|
    t.bigint "teacher_id"
    t.string "date"
    t.string "start"
    t.string "end"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["teacher_id"], name: "index_availabilities_on_teacher_id"
  end

  create_table "favourites", force: :cascade do |t|
    t.bigint "teacher_id"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["teacher_id"], name: "index_favourites_on_teacher_id"
    t.index ["user_id"], name: "index_favourites_on_user_id"
  end

  create_table "languages", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "lessons", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "teacher_id"
    t.bigint "availability_id"
    t.boolean "approved"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["availability_id"], name: "index_lessons_on_availability_id"
    t.index ["teacher_id"], name: "index_lessons_on_teacher_id"
    t.index ["user_id"], name: "index_lessons_on_user_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.bigint "teacher_id"
    t.bigint "user_id"
    t.text "body"
    t.integer "rating"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["teacher_id"], name: "index_reviews_on_teacher_id"
    t.index ["user_id"], name: "index_reviews_on_user_id"
  end

  create_table "teacher_languages", force: :cascade do |t|
    t.bigint "teacher_id"
    t.bigint "language_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["language_id"], name: "index_teacher_languages_on_language_id"
    t.index ["teacher_id"], name: "index_teacher_languages_on_teacher_id"
  end

  create_table "teachers", force: :cascade do |t|
    t.integer "price"
    t.string "area"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "description"
    t.index ["user_id"], name: "index_teachers_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "password_digest"
    t.string "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "availabilities", "teachers"
  add_foreign_key "favourites", "teachers"
  add_foreign_key "favourites", "users"
  add_foreign_key "lessons", "availabilities"
  add_foreign_key "lessons", "teachers"
  add_foreign_key "lessons", "users"
  add_foreign_key "reviews", "teachers"
  add_foreign_key "reviews", "users"
  add_foreign_key "teacher_languages", "languages"
  add_foreign_key "teacher_languages", "teachers"
  add_foreign_key "teachers", "users"
end
