class AddNameToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :NIF, :string
    add_column :users, :name, :string
    add_column :users, :last_name, :string
    add_column :users, :date_birth, :date
    add_column :users, :phone, :string
    add_column :users, :profile_photo, :string
    add_column :users, :address, :string
  end
end
