class RemoveColumns < ActiveRecord::Migration[7.0]
  def change
    remove_column :events, :event_type
    remove_column :events, :location
  end
end
