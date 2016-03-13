class CreateContactForms < ActiveRecord::Migration
  def change
    create_table :contact_forms do |t|
      t.string :firstName
      t.string :lastName
      t.string :email
      t.text :message

      t.timestamps null: false
    end
  end
end
